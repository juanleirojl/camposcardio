import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AgendamentoForm from '../components/AgendamentoForm'
import ComoFunciona from '../components/ComoFunciona'
import Depoimentos from '../components/Depoimentos'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <SectionDivider tint="light" />
        <section id="servicos" className="relative py-16 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,.06),rgba(255,255,255,0))]">
          <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>Especialidades</h2>
            <p className="text-slate-600">Cuidado cardiológico com foco em prevenção, família e qualidade de vida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
            <div className="card-elevated" data-aos="zoom-in">
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">❤</span>
                  <h3 className="font-semibold text-xl text-slate-900">Cardiologia Clínica</h3>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• Check-up cardiovascular completo</li>
                  <li>• Controle de hipertensão, arritmias e colesterol</li>
                  <li>• Prevenção e acompanhamento familiar</li>
                </ul>
                <a href="#agendar" className="mt-5 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800">Agendar cardiologia →</a>
              </div>
            </div>
            </Reveal>
            <Reveal delayMs={100}>
            <div className="card-elevated" data-aos="zoom-in">
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">🩺</span>
                  <h3 className="font-semibold text-xl text-slate-900">Clínica Médica</h3>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• Saúde integral do adulto e idoso</li>
                  <li>• Orientações de hábitos e medicações</li>
                  <li>• Teleconsulta humanizada</li>
                </ul>
                <a href="#agendar" className="mt-5 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800">Agendar clínica médica →</a>
              </div>
            </div>
            </Reveal>
            <Reveal delayMs={200}>
            <div className="card-elevated" data-aos="zoom-in">
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">🥗</span>
                  <h3 className="font-semibold text-xl text-slate-900">Estilo de Vida e Emagrecimento</h3>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  <li>• Planos personalizados de perda de peso</li>
                  <li>• Prevenção de doenças cardiovasculares</li>
                  <li>• Acompanhamento e metas semanais</li>
                </ul>
                <a href="#agendar" className="mt-5 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800">Agendar estilo de vida →</a>
              </div>
            </div>
            </Reveal>
          </div>
          </div>
        </section>
        <SectionDivider tint="dark" />
        <div className="bg-brand-700/5">
          <AgendamentoForm />
        </div>
        <ComoFunciona />
        <Depoimentos />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default LandingPage


