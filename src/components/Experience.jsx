
import React from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  { title: 'Frontend Engineer', company: 'PixelCraft', period: '2023 — Present', points: [
    'Built a design‑system and component library used across 5 apps',
    'Improved performance (LCP -38%) via code‑splitting and memoization',
  ]},
  { title: 'Full‑stack Developer', company: 'CodeWave', period: '2021 — 2023', points: [
    'Led migration to React + Vite, reduced bundle by 60%',
    'Designed PostgreSQL schemas and REST APIs'
  ]},
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-4">
        {ROLES.map((r, idx) => (
          <motion.div key={r.title} className="card p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-semibold">{r.title} · <span className="opacity-80">{r.company}</span></h3>
              </div>
              <div className="text-sm opacity-70">{r.period}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 opacity-90">
              {r.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
