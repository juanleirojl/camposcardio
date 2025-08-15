import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AgendamentoForm from '../components/AgendamentoForm'
import ComoFunciona from '../components/ComoFunciona'
import Depoimentos from '../components/Depoimentos'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'

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
            <h2 className="text-3xl font-semibold text-slate-900">Especialidades</h2>
            <p className="text-slate-600">Cuidado cardiológico com foco em prevenção, família e qualidade de vida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
            <div className="p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200 hover:shadow-lg transition-shadow" data-aos="zoom-in">
              <div className="flex items-center gap-3 text-brand-700">
                <span className="text-2xl">❤</span>
                <h3 className="font-semibold text-slate-900">Cardiologia clínica</h3>
              </div>
              <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>Check-up cardiológico</li>
                <li>Hipertensão, arritmias e colesterol</li>
                <li>Prevenção e acompanhamento familiar</li>
              </ul>
            </div>
            </Reveal>
            <Reveal delayMs={100}>
            <div className="p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200 hover:shadow-lg transition-shadow" data-aos="zoom-in">
              <div className="flex items-center gap-3 text-brand-700">
                <span className="text-2xl">🩺</span>
                <h3 className="font-semibold text-slate-900">Clínica médica</h3>
              </div>
              <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>Saúde integral do adulto e idoso</li>
                <li>Orientações de hábitos e medicações</li>
                <li>Teleconsulta humanizada</li>
              </ul>
            </div>
            </Reveal>
            <Reveal delayMs={200}>
            <div className="p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200 hover:shadow-lg transition-shadow" data-aos="zoom-in">
              <div className="flex items-center gap-3 text-brand-700">
                <span className="text-2xl">🥗</span>
                <h3 className="font-semibold text-slate-900">Estilo de vida e emagrecimento</h3>
              </div>
              <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>Planos personalizados de perda de peso</li>
                <li>Prevenção de doenças cardiovasculares</li>
                <li>Acompanhamento e metas semanais</li>
              </ul>
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
    </div>
  )
}

export default LandingPage


