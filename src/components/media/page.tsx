import React, { useState } from 'react'

const IconWrapper = ({ href, bg, children }: { href: string; bg: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`w-12 h-12 ${bg} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform`}
  >
    {children}
  </a>
)

function Media() {
  const [open, setOpen] = useState(false)
  const [openRight, setOpenRight] = useState(false)

  return (
    <>
      

      {/* Right side contact widget */}
      <div className="fixed z-50 flex flex-col items-center space-y-3 right-4 bottom-8">
        <div className={`flex flex-col items-center gap-3 transition-all ${openRight ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
          <IconWrapper href="corewavez0@gmail.com" bg="bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </IconWrapper>
          <IconWrapper href="https://www.facebook.com" bg="bg-[#1877F2]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.9v-3h1.6V9.2c0-1.6.9-2.5 2.3-2.5.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 .5-1 1v1.2h1.7l-.3 3H13v7A10 10 0 0022 12z" />
          </svg>
        </IconWrapper>

        <IconWrapper href="https://wa.me/94764811364" bg="bg-[#25D366]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 12c0 2.1.6 4 1.7 5.6L0 24l6.7-1.8A11.9 11.9 0 0012 24c6.6 0 11.9-5.4 11.9-12 0-1.9-.4-3.7-1.4-5.3zM12 21.6c-1.6 0-3.2-.4-4.6-1.1l-.3-.2-4 .9 1-3.9-.2-.3A8.1 8.1 0 013.9 12 8.1 8.1 0 0112 3.9c4.5 0 8.1 3.6 8.1 8.1S16.5 20.1 12 20.1zM16.6 14.8c-.3-.1-1.8-.9-2-.9-.3 0-.5-.1-.7.1-.2.1-.8.9-1 1.1-.1.1-.3.2-.5.1-.8-.3-2.6-1.5-3.5-3-.3-.4.3-.4.9-1.3.1-.2.1-.4 0-.5-.1-.1-.7-1.6-1-2.2-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5 0 1.4 1 2.8 1.2 3 .2.2 2.1 3.4 5.1 4.7 3 .9 3 .6 3.6.6.6 0 1.9-.8 2.1-1.6.2-.8.2-1.5.1-1.6-.1-.2-.4-.3-.7-.4z" />
          </svg>
        </IconWrapper>

        <IconWrapper href="https://www.tiktok.com" bg="bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </IconWrapper>

        

          {/* <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-12 h-12 bg-[#06b6d4] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Scroll to contact section"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M2 12l1.5-1.5L11 18V2h2v16l7.5-7.5L22 12 12 22 2 12z" />
            </svg>
          </button> */}
        </div>

        <button
          onClick={() => setOpenRight((s) => !s)}
          aria-label="Open contact links"
          className="flex items-center justify-center w-12 h-12 text-white transition-transform rounded-full shadow-xl bg-secondary hover:scale-105"
        >
          {/* Contact main icon (envelope) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Media
