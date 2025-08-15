import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-200 mt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:'radial-gradient(60% 40% at 50% 0%, rgba(244,63,94,0.06) 0%, rgba(255,255,255,0) 70%)'}} />
      <div className="container-max py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Campos Cardiologia" className="h-7" />
          <p className="text-sm text-slate-600">Cuidado completo para o seu coração.</p>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Campos Cardiologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer


