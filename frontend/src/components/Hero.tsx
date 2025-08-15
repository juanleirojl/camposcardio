import React from 'react'
import ParticlesHearts from './ParticlesHearts'

const Hero: React.FC = () => {
  return (
    <section className="relative gradient-hero">
      <ParticlesHearts />
      <div className="container-max pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 px-4 py-2 text-xs font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-[heartbeat_1.2s_ease-in-out_infinite]" />
            Cuidado cardiológico online e humanizado
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-slate-900" data-aos="fade-up">
            Cuidado completo para o seu coração
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl" data-aos="fade-up" data-aos-delay="100">
            Prevenção e qualidade de vida com atendimento online focado na saúde do seu coração e bem-estar geral. Cuidamos de toda a família, dos mais jovens aos mais experientes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#agendar" className="btn-primary">Agendar consulta</a>
            <a href="#como-funciona" className="btn-outline">Como funciona</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-700">
                ❤
              </span>
              Cardiologia clínica e preventiva
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-700">
                🩺
              </span>
              Estilo de vida e emagrecimento
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1600&auto=format&fit=crop" alt="Médicas cardiologistas" className="w-full h-[420px] object-cover" />
            <div className="absolute top-5 right-5 bg-white/80 rounded-full px-3 py-1 text-sm text-brand-800 shadow-card animate-float">
              ❤ Campos Cardiologia
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-4 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-700">Drª Rosângela e Drª Antonina</p>
            <p className="text-xs text-slate-500">Equipe dedicada ao seu coração</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


