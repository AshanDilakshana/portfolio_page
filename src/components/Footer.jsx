
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-sm opacity-70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Ashan profilo. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-100 opacity-80">Twitter</a>
          <a href="https://github.com/AshanDilakshana" className="hover:opacity-100 opacity-80">GitHub</a>
          <a href="#" className="hover:opacity-100 opacity-80">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
