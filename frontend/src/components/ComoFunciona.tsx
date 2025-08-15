import React from 'react'

const steps = [
  { title: 'Escolha sua especialidade', desc: 'Cardiologia, Clínica Médica, Prevenção ou Emagrecimento', icon: '💙' },
  { title: 'Selecione a médica', desc: 'Drª Rosângela ou Drª Antonina', icon: '👩‍⚕️' },
  { title: 'Defina data e horário', desc: 'Agenda interativa com próximos horários disponíveis', icon: '🗓️' },
  { title: 'Atendimento online', desc: 'Receba o link da consulta e orientações por e-mail', icon: '💻' }
]

const ComoFunciona: React.FC = () => {
  return (
    <section id="como-funciona" className="container-max py-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Como funciona</h2>
        <p className="mt-2 text-slate-600">Consulta online simples e prática em quatro passos</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200 text-center">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 font-semibold text-slate-800">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona


