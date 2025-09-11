
import React, { useEffect, useState } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  // { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-[#0b0b12]/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">Ashan <span className="text-brand-600">Dilakshana</span></a>
        <nav className="hidden md:flex gap-6 text-sm backdrop-blur-sm rounded-xl px-3 py-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-xl border border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(o=>!o)} aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="card p-4 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
