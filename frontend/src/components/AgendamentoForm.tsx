import React, { useEffect, useMemo, useState } from 'react'
import drRosangela from '../assets/dr-rosangela.jpg'
import drAntonina from '../assets/dr-antonina.jpg'
import { format } from 'date-fns'
import { Agendamento, Especialidade, MEDICAS, SLOTS, salvarAgendamento, validarCPF } from '../services/agendamentos'

const AgendamentoForm: React.FC = () => {
  const [especialidade, setEspecialidade] = useState<Especialidade>('Cardiologia')
  const [medicaId, setMedicaId] = useState<string>('rosangela')
  const [dataHora, setDataHora] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [dataNascimento, setDataNascimento] = useState<string>('')
  const [sexo, setSexo] = useState<'Feminino'|'Masculino'|'Outro'>('Feminino')
  const [objetivo, setObjetivo] = useState<string>('')
  const [sucesso, setSucesso] = useState<string>('')
  const [erro, setErro] = useState<string>('')

  const medicasFiltradas = useMemo(() => {
    return MEDICAS.filter(m => m.especialidades.includes(especialidade))
  }, [especialidade])

  const slots = useMemo(() => SLOTS, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const m = params.get('medica')
    if (m === 'rosangela' || m === 'antonina') {
      setMedicaId(m)
    }
  }, [])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSucesso('')
    setErro('')

    if (!validarCPF(cpf)) {
      setErro('CPF inválido. Verifique os dígitos.')
      return
    }
    if (!nome || !dataNascimento || !dataHora) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    const novo: Agendamento = {
      id: crypto.randomUUID(),
      especialidade,
      medicaId,
      dataHora,
      cpf: cpf.replace(/\D/g, ''),
      nome,
      dataNascimento,
      sexo,
      objetivo
    }
    salvarAgendamento(novo)
    setSucesso('Agendamento realizado com sucesso! Você receberá a confirmação por e-mail.')
    setDataHora('')
    setObjetivo('')
  }

  return (
    <section id="agendar" className="container-max py-16" data-aos="fade-up">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 text-brand-700 animate-heartbeat">❤</span>
            Agende sua consulta
          </h2>
          <p className="mt-2 text-slate-600">Escolha a especialidade, a médica e o melhor horário para você.</p>
          <div className="mt-6 p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200">
            {erro && <div className="mb-4 text-sm text-red-600">{erro}</div>}
            {sucesso && <div className="mb-4 text-sm text-green-700">{sucesso}</div>}
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Especialidade</label>
                  <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value as Especialidade)} className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500">
                    <option>Cardiologia</option>
                    <option>Clínica Médica</option>
                    <option>Prevenção</option>
                    <option>Emagrecimento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Médica</label>
                  <select value={medicaId} onChange={(e) => setMedicaId(e.target.value)} className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500">
                    {medicasFiltradas.map(m => (
                      <option key={m.id} value={m.id}>{m.nome}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Data e horário</label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto p-2 rounded-lg border border-slate-200">
                  {slots.map(s => {
                    const value = s.toISOString()
                    const label = format(s, "dd/MM 'às' HH:mm")
                    const selecionado = dataHora === value
                    return (
                      <button type="button" key={value} onClick={() => setDataHora(value)}
                        className={"text-sm rounded-lg border px-3 py-2 text-left hover:border-brand-400 hover:bg-brand-50 " + (selecionado ? 'border-brand-500 bg-brand-50 text-brand-900' : 'border-slate-200 text-slate-700')}
                      >{label}</button>
                    )
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">CPF</label>
                  <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Somente números" className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nome completo</label>
                  <input value={nome} onChange={(e) => setNome(e.target.value)} className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Data de nascimento</label>
                  <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Sexo</label>
                  <select value={sexo} onChange={(e) => setSexo(e.target.value as any)} className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500">
                    <option>Feminino</option>
                    <option>Masculino</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Objetivo da consulta</label>
                  <input value={objetivo} onChange={(e) => setObjetivo(e.target.value)} placeholder="Ex.: check-up, dor no peito, emagrecimento" className="mt-1 w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
                </div>
              </div>

              <div className="pt-2">
                <button className="btn-primary" type="submit">Confirmar agendamento</button>
                <p className="mt-2 text-xs text-slate-500">Dados protegidos. Você receberá e-mail com o link da teleconsulta.</p>
              </div>
            </form>
          </div>
        </div>

        <aside className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-slate-900">Nossas médicas</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-4">
              <img className="w-16 h-16 rounded-full object-cover" src={drRosangela} alt="Drª Rosângela" />
              <div>
                <p className="font-medium text-slate-800">Drª Rosângela Campos</p>
                <p className="text-sm text-slate-600">Cardiologista e Clínica Médica, +30 anos de experiência. Foco em prevenção familiar e tratamento das doenças cardiovasculares.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <img className="w-16 h-16 rounded-full object-cover" src={drAntonina} alt="Drª Antonina" />
              <div>
                <p className="font-medium text-slate-800">Drª Antonina Campos</p>
                <p className="text-sm text-slate-600">Residente em Cardiologia. Qualidade de vida, estilo de vida saudável e prevenção. Estudos em emagrecimento e obesidade.</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default AgendamentoForm

