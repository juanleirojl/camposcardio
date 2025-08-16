Campos Cardiologia - Site Estático

Projeto estático em HTML/CSS/JS, preparado para desenvolvimento com live reload e publicação em hospedagem compartilhada (Hostinger, etc.).

Rodando localmente

1. Requisitos: Node.js LTS
2. Instalação: `npm install`
3. Dev server: `npm run dev` → abre em http://localhost:5500/index.html

Estrutura

- index.html – markup principal
- styles.css – estilos (identidade visual)
- app.js – funcionalidades (agendamento com localStorage, AOS-like, divisores, WhatsApp)
- assets/ – imagens estáticas (médicas e logo)

Deploy (Hostinger)

- Faça upload da pasta `site-basico/` para `public_html/`
- Ajuste caminhos se necessário (imagens em `./assets/...`)
- `.htaccess` não é necessário para site estático

Observações

- Agendamento salva no localStorage (demonstração). Para produção com backend, trocar por API.
- Ícones em emojis por simplicidade. Pode-se substituir por SVGs inline.


