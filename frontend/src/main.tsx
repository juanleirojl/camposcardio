import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import LandingPage from './pages/LandingPage'
import DashboardMedica from './pages/DashboardMedica'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/dashboard', element: <DashboardMedica /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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

// Hide loader after mount
window.addEventListener('load', () => {
  const loader = document.getElementById('loader')
  if (loader) {
    loader.style.opacity = '0'
    loader.style.transition = 'opacity .35s ease'
    setTimeout(() => loader.remove(), 400)
  }
})


