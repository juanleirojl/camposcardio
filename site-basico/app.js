/* Util: gerar path do traçado do divisor (sem dependências) */
function generateDividerPath(width = 1200, baseline = 20, segment = 120) {
  let x = 0;
  let path = `M0,${baseline}`;
  while (x < width) {
    path += ` L${x + 40},${baseline}`;
    path += ` L${x + 50},${baseline - 3}`;
    path += ` L${x + 58},${baseline + 8}`;
    path += ` L${x + 64},${baseline - 15}`; // pico
    path += ` L${x + 70},${baseline + 12}`; // queda
    path += ` L${x + 80},${baseline}`;
    path += ` L${x + segment},${baseline}`;
    x += segment;
  }
  return path;
}

function initDividerPaths() {
  const ids = ["dividerPath", "dividerPath2", "dividerPathB", "dividerPathB2"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("d", generateDividerPath());
  });
}

/* WhatsApp */
function initWhatsApp(phone = "5511999999999", message = "Olá! Gostaria de agendar uma consulta.") {
  const a = document.getElementById("wa");
  if (!a) return;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  a.href = href;
}

/* Agendamento mock com localStorage */
const MEDICAS = [
  { id: "rosangela", nome: "Drª Rosângela Campos", especialidades: ["Cardiologia", "Clínica Médica", "Prevenção"] },
  { id: "antonina", nome: "Drª Antonina Campos", especialidades: ["Prevenção", "Emagrecimento"] },
];

function listarAgendamentos() {
  try { return JSON.parse(localStorage.getItem("agendamentos") || "[]"); } catch { return []; }
}
function salvarAgendamento(a) {
  const lista = listarAgendamentos();
  lista.push(a);
  localStorage.setItem("agendamentos", JSON.stringify(lista));
}

function validarCPF(cpf) {
  const c = (cpf || "").replace(/\D/g, "");
  if (!c || c.length !== 11 || /^([0-9])\1+$/.test(c)) return false;
  let soma = 0; for (let i = 0; i < 9; i++) soma += parseInt(c[i]) * (10 - i);
  let d1 = (soma * 10) % 11; if (d1 === 10) d1 = 0; if (d1 !== parseInt(c[9])) return false;
  soma = 0; for (let i = 0; i < 10; i++) soma += parseInt(c[i]) * (11 - i);
  let d2 = (soma * 10) % 11; if (d2 === 10) d2 = 0; return d2 === parseInt(c[10]);
}

function gerarSlots() {
  const out = [];
  const now = new Date();
  for (let i = 1; i <= 20; i++) {
    const d = new Date(now.getTime() + i * 60 * 60 * 1000);
    if (d.getHours() >= 8 && d.getHours() <= 19) out.push(d);
  }
  return out;
}

function formatarData(dt) {
  return `${String(dt.getDate()).padStart(2, "0")}/${String(dt.getMonth() + 1).padStart(2, "0")} às ${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`;
}

function initForm() {
  const form = document.getElementById("form");
  if (!form) return;
  const especialidade = document.getElementById("especialidade");
  const medica = document.getElementById("medica");
  const slotsEl = document.getElementById("slots");
  const cpf = document.getElementById("cpf");
  const nome = document.getElementById("nome");
  const nasc = document.getElementById("nascimento");
  const sexo = document.getElementById("sexo");
  const objetivo = document.getElementById("objetivo");
  const alert = document.getElementById("form-alert");

  function preencherMedicas() {
    const esp = especialidade.value;
    medica.innerHTML = "";
    MEDICAS.filter((m) => m.especialidades.includes(esp)).forEach((m) => {
      const opt = document.createElement("option");
      opt.value = m.id; opt.textContent = m.nome; medica.appendChild(opt);
    });
  }

  function preencherSlots() {
    slotsEl.innerHTML = "";
    gerarSlots().forEach((d) => {
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "slot"; btn.textContent = formatarData(d);
      btn.dataset.value = d.toISOString();
      btn.addEventListener("click", () => {
        Array.from(slotsEl.querySelectorAll(".slot")).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        slotsEl.dataset.value = btn.dataset.value;
      });
      slotsEl.appendChild(btn);
    });
  }

  function preSelecaoPorQuery() {
    const params = new URLSearchParams(location.search);
    const m = params.get("medica");
    if (m && (m === "rosangela" || m === "antonina")) {
      // achar especialidade compatível se necessário
      let espAtual = especialidade.value;
      const med = MEDICAS.find((x) => x.id === m);
      if (med && !med.especialidades.includes(espAtual)) especialidade.value = med.especialidades[0];
      preencherMedicas();
      medica.value = m;
    }
  }

  especialidade.addEventListener("change", preencherMedicas);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert.className = "alert";
    alert.classList.add("hidden");
    const dataHora = slotsEl.dataset.value || "";
    if (!validarCPF(cpf.value)) {
      alert.textContent = "CPF inválido. Verifique os dígitos.";
      alert.classList.remove("hidden");
      alert.classList.add("error");
      return;
    }
    if (!nome.value || !nasc.value || !dataHora) {
      alert.textContent = "Preencha todos os campos obrigatórios.";
      alert.classList.remove("hidden");
      alert.classList.add("error");
      return;
    }
    const novo = {
      id: crypto.randomUUID(),
      especialidade: especialidade.value,
      medicaId: medica.value,
      dataHora,
      cpf: cpf.value.replace(/\D/g, ""),
      nome: nome.value,
      dataNascimento: nasc.value,
      sexo: sexo.value,
      objetivo: objetivo.value,
    };
    salvarAgendamento(novo);
    alert.textContent = "Agendamento realizado com sucesso! Você receberá a confirmação por e-mail.";
    alert.classList.remove("hidden");
    alert.classList.add("success");
    slotsEl.dataset.value = "";
    objetivo.value = "";
  });

  // inicializações
  preencherMedicas();
  preencherSlots();
  preSelecaoPorQuery();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = String(new Date().getFullYear());
  initDividerPaths();
  initWhatsApp();
  initForm();
});


