import React, { useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Agendamento, listarAgendamentos } from '../services/agendamentos'

const DashboardMedica: React.FC = () => {
  const [medicaId, setMedicaId] = useState('rosangela')
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  useEffect(() => {
    setAgendamentos(listarAgendamentos())
  }, [])

  const filtrados = useMemo(() => agendamentos.filter(a => a.medicaId === medicaId), [agendamentos, medicaId])

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container-max py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Campos Cardiologia" className="h-8" />
          </Link>
          <div className="flex items-center gap-3">
            <select value={medicaId} onChange={(e) => setMedicaId(e.target.value)} className="rounded-lg border-slate-300">
              <option value="rosangela">Drª Rosângela</option>
              <option value="antonina">Drª Antonina</option>
            </select>
            <Link to="/" className="btn-outline">Voltar ao site</Link>
          </div>
        </div>
      </header>
      <main className="container-max py-10">
        <h1 className="text-2xl font-semibold text-slate-900">Meus agendamentos</h1>
        <p className="text-slate-600">Visualize as consultas marcadas pelos pacientes.</p>
        <div className="mt-6 grid gap-4">
          {filtrados.length === 0 && (
            <div className="p-6 bg-white rounded-xl ring-1 ring-slate-200">Nenhum agendamento no momento.</div>
          )}
          {filtrados.map(a => (
            <div key={a.id} className="p-6 bg-white rounded-xl ring-1 ring-slate-200 shadow-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">{a.nome} <span className="text-slate-500 text-sm">({a.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')})</span></p>
                  <p className="text-sm text-slate-600">{a.especialidade} • {a.sexo} • Nasc. {a.dataNascimento}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-brand-800">{format(new Date(a.dataHora), "dd/MM 'às' HH:mm")}</p>
                  <p className="text-sm text-slate-600">{a.medicaId === 'rosangela' ? 'Drª Rosângela' : 'Drª Antonina'}</p>
                </div>
              </div>
              {a.objetivo && <p className="mt-3 text-sm text-slate-700">Objetivo: {a.objetivo}</p>}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default DashboardMedica


