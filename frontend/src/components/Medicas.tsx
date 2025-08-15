import React from 'react'
import Reveal from './Reveal'
import drRosangela from '../assets/dr-rosangela.jpg'
import drAntonina from '../assets/dr-antonina.jpg'

const Medicas: React.FC = () => {
  return (
    <section id="medicas" className="container-max py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>Nossas Médicas</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Conheça quem vai cuidar de você e da sua família com foco em cardiologia, prevenção e qualidade de vida.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 gap-7">
        <Reveal>
          <article className="card-compact overflow-hidden hover-lift">
            <div className="relative h-64">
              <img src={drRosangela} alt="Drª Rosângela Campos" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs text-slate-800 shadow-card ring-1 ring-slate-200">
                <span>🫀</span> Cardiologia • Clínica Médica
              </div>
            </div>
            <div className="card-body-compact">
              <h3 className="text-xl font-semibold text-slate-900">Drª Rosângela Campos</h3>
              <p className="mt-1 text-sm text-slate-600">Cardiologista e Clínica Médica com mais de 30 anos de experiência. Enfoque em prevenção familiar, acompanhamento de fatores de risco e cuidado humanizado.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs bg-brand-50 text-brand-800">Hipertensão</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-brand-50 text-brand-800">Arritmias</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">Prevenção familiar</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">Check-up</span>
              </div>
              <div className="mt-3 feature-list">
                <div className="feature-item"><span className="feature-icon">🩺</span><span className="feature-text">Avaliação completa e plano preventivo personalizado</span></div>
                <div className="feature-item"><span className="feature-icon">🧪</span><span className="feature-text">Revisão de exames, ajuste terapêutico e seguimento</span></div>
                <div className="feature-item"><span className="feature-icon">💻</span><span className="feature-text">Teleconsulta prática e acolhedora</span></div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-amber-500 text-sm">★★★★★<span className="ml-2 text-slate-500">5.0</span></div>
                <a href="?medica=rosangela#agendar" className="btn-primary btn-primary--sm">Agendar com Rosângela</a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delayMs={100}>
          <article className="card-compact overflow-hidden hover-lift">
            <div className="relative h-64">
              <img src={drAntonina} alt="Drª Antonina Campos" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs text-slate-800 shadow-card ring-1 ring-slate-200">
                <span>🍎</span> Estilo de vida • Emagrecimento
              </div>
            </div>
            <div className="card-body-compact">
              <h3 className="text-xl font-semibold text-slate-900">Drª Antonina Campos</h3>
              <p className="mt-1 text-sm text-slate-600">Formação em Cardiologia e atuação em prevenção, qualidade de vida e emagrecimento saudável. Acompanhamento contínuo e orientação prática.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs bg-brand-50 text-brand-800">Prevenção</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-brand-50 text-brand-800">Emagrecimento</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">Estilo de vida</span>
                <span className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700">Sono e exercícios</span>
              </div>
              <div className="mt-3 feature-list">
                <div className="feature-item"><span className="feature-icon">🎯</span><span className="feature-text">Plano de metas com acompanhamento semanal</span></div>
                <div className="feature-item"><span className="feature-icon">💙</span><span className="feature-text">Educação em hábitos e prevenção cardiovascular</span></div>
                <div className="feature-item"><span className="feature-icon">💻</span><span className="feature-text">Teleconsulta acolhedora e objetiva</span></div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-amber-500 text-sm">★★★★★<span className="ml-2 text-slate-500">5.0</span></div>
                <a href="?medica=antonina#agendar" className="btn-primary btn-primary--sm">Agendar com Antonina</a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Medicas


