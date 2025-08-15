import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import Loader from './components/Loader'
const LandingPage = React.lazy(() => import('./pages/LandingPage'))
const DashboardMedica = React.lazy(() => import('./pages/DashboardMedica'))

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/dashboard', element: <DashboardMedica /> },
])

const DelayedFallback: React.FC<{ delay?: number }> = ({ delay = 200 }) => {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t) }, [delay])
  return show ? <Loader /> : null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<DelayedFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)

// Init AOS-like system
const initAOS = () => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('aos-init')
        entry.target.classList.add('aos-animate')
        observer.unobserve(entry.target)
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
  document.querySelectorAll('[data-aos]').forEach(el => { el.classList.add('aos-init'); observer.observe(el) })
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAOS)
} else {
  initAOS()
}

// Loader inicial: sempre que atualizar a página
const hideInitialLoader = () => {
  const loader = document.getElementById('loader')
  if (!loader) return
  loader.style.transition = 'opacity .35s ease'
  setTimeout(() => { loader.style.opacity = '0' }, 250)
  setTimeout(() => loader.remove(), 700)
}

if (document.readyState === 'complete') {
  hideInitialLoader()
} else {
  window.addEventListener('load', hideInitialLoader)
}


