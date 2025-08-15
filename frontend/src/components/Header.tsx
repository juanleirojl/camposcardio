import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 glass">
      <div className="container-max flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3" data-aos="fade-down" aria-label="Campos Cardiologia">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl" style={{background:'#ef4444', boxShadow:'0 8px 20px rgba(239,68,68,.25)'}}>
            <svg viewBox="0 0 64 64" className="w-6 h-6 text-white" aria-hidden="true">
              <path d="M32 48c-7-6-18-12-18-23a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11-11 17-18 23z" fill="currentColor"/>
              <polyline points="14,30 24,30 27,22 31,40 35,30 44,30 50,26" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-lg font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>Campos</div>
            <div className="text-xs text-slate-500 -mt-0.5">Cardiologia</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicos" className="text-sm font-medium text-slate-700 hover:text-brand-800">Serviços</a>
          <a href="#como-funciona" className="text-sm font-medium text-slate-700 hover:text-brand-800">Como funciona</a>
          <a href="#depoimentos" className="text-sm font-medium text-slate-700 hover:text-brand-800">Depoimentos</a>
          <a href="#agendar" className="btn-outline">Agendar agora</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="text-xs md:text-sm text-brand-700 hover:text-brand-800">Área da médica</Link>
          <a href="#agendar" className="btn-primary text-sm">Agende sua consulta</a>
        </div>
      </div>
    </header>
  )
}

export default Header


