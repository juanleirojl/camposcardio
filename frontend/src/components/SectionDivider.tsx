import React, { useMemo } from 'react'

type Props = {
  tint?: 'light' | 'dark'
}

const SectionDivider: React.FC<Props> = ({ tint = 'light' }) => {
  const stroke = tint === 'light' ? '#fda4af' : '#fecdd3'
  const glow = tint === 'light' ? 'rgba(244,63,94,0.28)' : 'rgba(254,205,211,0.28)'
  const glowWidth = 1.25
  const strokeWidth = 0.5

  const d = useMemo(() => {
    const width = 1200
    const baseline = 20
    const segment = 120
    let x = 0
    let path = `M0,${baseline}`
    while (x < width) {
      path += ` L${x + 40},${baseline}`
      path += ` L${x + 50},${baseline - 3}`
      path += ` L${x + 58},${baseline + 8}`
      path += ` L${x + 64},${baseline - 15}` // pico
      path += ` L${x + 70},${baseline + 12}` // queda
      path += ` L${x + 80},${baseline}`
      path += ` L${x + segment},${baseline}`
      x += segment
    }
    return path
  }, [tint])

  return (
    <div className="w-full" aria-hidden>
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6">
        <path d={d} fill="none" stroke={glow} strokeWidth={glowWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default SectionDivider


