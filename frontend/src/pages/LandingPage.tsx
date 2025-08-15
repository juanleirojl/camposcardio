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
import Medicas from '../components/Medicas'

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
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">🫀</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Cardiologia Geral</h3>
                      <p className="text-sm text-slate-500">Consultas e acompanhamento completo de doenças cardiovasculares</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Avaliação cardiovascular completa</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Diagnóstico e tratamento</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Acompanhamento preventivo</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">🛡️</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Prevenção Cardiovascular</h3>
                      <p className="text-sm text-slate-500">Foco na prevenção e detecção precoce de problemas cardíacos</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Check-up preventivo</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Avaliação de fatores de risco</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Orientações lifestyle</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">👨‍👩‍👧‍👦</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Medicina Familiar</h3>
                      <p className="text-sm text-slate-500">Cuidado integral para toda a família, de crianças a idosos</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Atendimento pediátrico</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Cuidado do adulto</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Geriatria preventiva</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">🍎</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Controle de Peso</h3>
                      <p className="text-sm text-slate-500">Programa especializado em emagrecimento e tratamento da obesidade</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Avaliação nutricional</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Plano de emagrecimento</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Acompanhamento contínuo</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">🏃</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Estilo de Vida</h3>
                      <p className="text-sm text-slate-500">Orientações para um estilo de vida mais saudável e equilibrado</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Mudanças de hábitos</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Exercícios adequados</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Bem-estar mental</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="relative card-compact h-full" data-aos="zoom-in">
                <div className="card-body-compact">
                  <div className="flex items-start gap-3">
                    <span className="service-icon">🎥</span>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">Telemedicina</h3>
                      <p className="text-sm text-slate-500">Consultas online seguras e convenientes</p>
                    </div>
                  </div>
                  <div className="mt-4 check-list">
                    <div className="check-item"><span className="check-icon">✔</span><span>Consulta por videoconferência</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Acompanhamento remoto</span></div>
                    <div className="check-item"><span className="check-icon">✔</span><span>Prescrições digitais</span></div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a href="#agendar" className="btn-primary btn-primary--sm">Agendar</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </section>
        <Medicas />
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


