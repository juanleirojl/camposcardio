import React from 'react'
import ParticlesHearts from './ParticlesHearts'
import drRosangela from '../assets/dr-rosangela.jpg'
import drAntonina from '../assets/dr-antonina.jpg'

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative gradient-hero">
      <ParticlesHearts />
      <div className="container-max pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 px-4 py-2 text-xs font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-[heartbeat_1.2s_ease-in-out_infinite]" />
            Cuidado cardiológico online e humanizado
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-slate-900" data-aos="fade-up" style={{fontFamily:'Playfair Display, serif'}}>
            Cuidado <span className="text-brand-700">Completo</span> para o seu <span className="text-brand-700">Coração</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Prevenção e qualidade de vida com atendimento online humanizado. Acompanhamento clínico e cardiológico para toda a família, com foco em hábitos saudáveis, equilíbrio e bem-estar duradouro.
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#agendar" className="btn-primary">Agendar consulta</a>
            <a href="#como-funciona" className="btn-outline">Como funciona</a>
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-lg gap-6 text-center" data-aos="fade-up" data-aos-delay="250">
            <div>
              <div className="text-3xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>30+</div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>100%</div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Online</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900" style={{fontFamily:'Playfair Display, serif'}}>24/7</div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Suporte</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-slate-200 h-[420px]">
              <img src={drRosangela} alt="Drª Rosângela" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/85 rounded-full px-3 py-1 text-xs text-slate-800 shadow-card">Cardiologista</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-slate-200 h-[420px]">
              <img src={drAntonina} alt="Drª Antonina" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/85 rounded-full px-3 py-1 text-xs text-slate-800 shadow-card">Estilo de vida</div>
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


