import React from 'react'

type Props = { small?: boolean }

const Loader: React.FC<Props> = ({ small }) => {
  const box = small ? 40 : 56
  const radius = small ? 12 : 14
  const icon = small ? 24 : 28

  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader-content">
        <div className="logo-icon" style={{ width: box, height: box, borderRadius: radius }}>
          <svg viewBox="0 0 64 64" aria-hidden="true" className="icon-heart" style={{ width: icon, height: icon }}>
            <rect x="2" y="2" width="60" height="60" rx="14" fill="#ef4444"></rect>
            <path d="M32 48c-7-6-18-12-18-23a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11-11 17-18 23z" fill="#fff"/>
            <polyline points="14,30 24,30 27,22 31,40 35,30 44,30 50,26" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="loader-text">Carregando...</p>
      </div>
    </div>
  )
}

export default Loader


