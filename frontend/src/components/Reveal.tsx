import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delayMs?: number
}

const Reveal: React.FC<Props> = ({ children, delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return (
    <div ref={ref} className={visible ? 'reveal-in' : 'reveal-start'}>
      {children}
    </div>
  )
}

export default Reveal


