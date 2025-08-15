import React from 'react'

const depo = [
  { nome: 'Marina S.', texto: 'Atendimento impecável e humanizado. A consulta online foi super prática e esclarecedora.' },
  { nome: 'Carlos P.', texto: 'Consegui organizar meu check-up com facilidade. Recomendo a todos!' },
  { nome: 'Bianca R.', texto: 'As orientações de prevenção e estilo de vida melhoraram muito minha qualidade de vida.' }
]

const Depoimentos: React.FC = () => {
  return (
    <section id="depoimentos" className="container-max py-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Depoimentos</h2>
        <p className="mt-2 text-slate-600">Histórias reais de quem confia na nossa equipe</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {depo.map(d => (
          <blockquote key={d.nome} className="p-6 rounded-2xl bg-white shadow-card ring-1 ring-slate-200">
            <p className="text-slate-700">“{d.texto}”</p>
            <footer className="mt-4 text-sm text-slate-500">— {d.nome}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Depoimentos


