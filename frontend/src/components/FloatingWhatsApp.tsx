import React from 'react'

type Props = {
  phone?: string
  message?: string
}

const FloatingWhatsApp: React.FC<Props> = ({ phone = '5511999999999', message = 'Olá! Gostaria de agendar uma consulta.' }) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <div className="floating-whatsapp">
      <a href={href} target="_blank" rel="noopener" aria-label="WhatsApp" title="Falar no WhatsApp">
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" focusable="false">
          <path fill="#ffffff" d="M19.11 17.63c-.32-.16-1.86-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.33-.49-2.54-1.57-.94-.83-1.57-1.86-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.63-.52-.55-.71-.55h-.61c-.19 0-.5.08-.76.4-.26.32-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.17 2.98.16.21 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.62.69.22 1.33.19 1.83.11.56-.08 1.86-.76 2.12-1.49.26-.73.26-1.35.18-1.49-.08-.13-.29-.21-.61-.37z"/>
          <path fill="#ffffff" d="M16 2.67c-7.36 0-13.33 5.98-13.33 13.33 0 2.35.61 4.56 1.68 6.48L2.67 29.33l6.99-1.82c1.85 1 3.97 1.56 6.23 1.56 7.36 0 13.33-5.98 13.33-13.33S23.36 2.67 16 2.67zm0 24.89c-2.08 0-4-.6-5.63-1.63l-.4-.24-4.15 1.08 1.11-4.05-.26-.42c-1.04-1.71-1.63-3.72-1.63-5.9 0-6.23 5.08-11.31 11.31-11.31S27.31 10.77 27.31 17 22.23 27.56 16 27.56z"/>
        </svg>
      </a>
    </div>
  )
}

export default FloatingWhatsApp


