import React, { useEffect, useRef } from 'react'

const ParticlesHearts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animationFrame = 0
    let stopped = false

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const cw = canvas.clientWidth
      const ch = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(cw * DPR))
      canvas.height = Math.max(1, Math.floor(ch * DPR))
    }
    resize()
    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    const particles = Array.from({ length: 28 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      s: 0.5 + Math.random() * 1.2,
      a: Math.random() * Math.PI * 2,
      v: 0.3 + Math.random() * 0.6
    }))

    const drawHeart = (x: number, y: number, size: number, alpha: number) => {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.translate(x, y)
      ctx.scale(size, size)
      ctx.beginPath()
      for (let t = 0; t < Math.PI * 2; t += 0.1) {
        const hx = 16 * Math.pow(Math.sin(t), 3)
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
        if (t === 0) ctx.moveTo(hx, -hy)
        else ctx.lineTo(hx, -hy)
      }
      ctx.closePath()
      ctx.fillStyle = 'rgba(244,63,94,0.12)'
      ctx.fill()
      ctx.restore()
    }

    const loop = () => {
      if (stopped) return
      animationFrame = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y -= 0.0005 * p.s
        p.x += Math.sin((performance.now() / 1000) * p.v + p.a) * 0.0003
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random() }
        drawHeart(p.x * canvas.width, p.y * canvas.height, p.s * 0.6 * DPR, 0.8)
      })
    }
    loop()
    return () => { stopped = true; cancelAnimationFrame(animationFrame); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
}

export default ParticlesHearts


