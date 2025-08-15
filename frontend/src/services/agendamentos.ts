import { addDays, isBefore, isEqual, setHours, setMinutes } from 'date-fns'

export type Especialidade = 'Cardiologia' | 'Clínica Médica' | 'Prevenção' | 'Emagrecimento'

export type Medica = {
  id: string
  nome: string
  especialidades: Especialidade[]
}

export type Agendamento = {
  id: string
  especialidade: Especialidade
  medicaId: string
  dataHora: string
  cpf: string
  nome: string
  dataNascimento: string
  sexo: 'Feminino' | 'Masculino' | 'Outro'
  objetivo: string
}

export const MEDICAS: Medica[] = [
  {
    id: 'rosangela',
    nome: 'Drª Rosângela Campos',
    especialidades: ['Cardiologia', 'Clínica Médica', 'Prevenção']
  },
  {
    id: 'antonina',
    nome: 'Drª Antonina Campos',
    especialidades: ['Cardiologia', 'Prevenção', 'Emagrecimento']
  }
]

function gerarSlotsProximosDias(): Date[] {
  const slots: Date[] = []
  for (let d = 0; d < 14; d++) {
    const base = addDays(new Date(), d)
    for (let h = 8; h <= 17; h++) {
      const slot = setMinutes(setHours(base, h), 0)
      if (isBefore(new Date(), slot) || isEqual(new Date(), slot)) {
        slots.push(slot)
      }
    }
  }
  return slots
}

export const SLOTS = gerarSlotsProximosDias()

export function listarAgendamentos(): Agendamento[] {
  try {
    return JSON.parse(localStorage.getItem('cc_agendamentos') || '[]') as Agendamento[]
  } catch {
    return []
  }
}

export function salvarAgendamento(agendamento: Agendamento): void {
  const existing = listarAgendamentos()
  existing.push(agendamento)
  localStorage.setItem('cc_agendamentos', JSON.stringify(existing))
}

export function validarCPF(value: string): boolean {
  const clean = value.replace(/\D/g, '')
  if (clean.length !== 11) return false
  if (/^(\d)\1+$/.test(clean)) return false
  const calc = (base: string, factor: number) => {
    let sum = 0
    for (let i = 0; i < base.length; i++) sum += parseInt(base[i]) * (factor - i)
    const rest = (sum * 10) % 11
    return rest === 10 ? 0 : rest
  }
  const d1 = calc(clean.slice(0, 9), 10)
  const d2 = calc(clean.slice(0, 10), 11)
  return d1 === parseInt(clean[9]) && d2 === parseInt(clean[10])
}


