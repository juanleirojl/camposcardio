import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 glass">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3" data-aos="fade-down">
          <img src="/logo.svg" alt="Campos Cardiologia" className="h-8 animate-heartbeat" />
        </div>
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


