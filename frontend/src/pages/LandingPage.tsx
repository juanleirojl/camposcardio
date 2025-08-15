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
        <section id="servicos" className="relative py-20 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,.08),rgba(255,255,255,0))]">
          <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 px-4 py-2 text-xs font-semibold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-[heartbeat_1.2s_ease-in-out_infinite]" /> Serviços
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>Especialidades que cuidam do seu coração</h2>
            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Abordagem completa com foco em prevenção, bem-estar e acompanhamento contínuo. Escolha a especialidade ideal e agende online.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7 items-stretch">
            <Reveal>
            <div className="relative card-elevated h-full" data-aos="zoom-in">
              <div className="absolute -top-3 -left-3 px-3 py-1 rounded-lg text-xs font-semibold text-white shadow-md" style={{backgroundImage:'linear-gradient(135deg,#be123c,#f43f5e)'}}>Mais procurado</div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">❤</span>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900">Cardiologia Clínica</h3>
                    <p className="text-sm text-slate-500">Avaliação completa e acompanhamento de fatores de risco</p>
                  </div>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-2">
                  <li>• Check-up cardiovascular e estratificação de risco</li>
                  <li>• Controle de hipertensão, arritmias e colesterol</li>
                  <li>• Plano preventivo personalizado para sua rotina</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs bg-brand-50 text-brand-700">Retorno em 30 dias</span>
                  <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">100% online</span>
                  <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">Particular</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-amber-500 text-sm">★★★★★<span className="ml-2 text-slate-500">5.0</span></div>
                  <a href="#agendar" className="btn-primary">Agendar</a>
                </div>
              </div>
            </div>
            </Reveal>
            <Reveal delayMs={100}>
            <div className="relative card-elevated h-full" data-aos="zoom-in">
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">🩺</span>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900">Clínica Médica</h3>
                    <p className="text-sm text-slate-500">Saúde integral, continuidade de cuidados e orientação</p>
                  </div>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-2">
                  <li>• Atendimento do adulto e idoso</li>
                  <li>• Revisão de exames e ajuste terapêutico</li>
                  <li>• Teleconsulta humanizada e prática</li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-amber-500 text-sm">★★★★★<span className="ml-2 text-slate-500">5.0</span></div>
                  <a href="#agendar" className="btn-primary">Agendar</a>
                </div>
              </div>
            </div>
            </Reveal>
            <Reveal delayMs={200}>
            <div className="relative card-elevated h-full" data-aos="zoom-in">
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg text-xs font-semibold text-white shadow-md" style={{backgroundImage:'linear-gradient(135deg,#9f1239,#f43f5e)'}}>Novo</div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-icon">🥗</span>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900">Estilo de Vida e Emagrecimento</h3>
                    <p className="text-sm text-slate-500">Perda de peso saudável e prevenção cardiovascular</p>
                  </div>
                </div>
                <div className="card-ribbon mt-4"/>
                <ul className="mt-4 text-sm text-slate-700 space-y-2">
                  <li>• Plano de metas e acompanhamento semanal</li>
                  <li>• Orientação de hábitos, sono e exercícios</li>
                  <li>• Prevenção de doenças relacionadas à obesidade</li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-amber-500 text-sm">★★★★★<span className="ml-2 text-slate-500">5.0</span></div>
                  <a href="#agendar" className="btn-primary">Agendar</a>
                </div>
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


