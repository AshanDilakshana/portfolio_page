// src/components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Wind,
  Cpu,
  Box,
  Server,
  Cloud,
  Database,
  Leaf,
  Coffee,
  Layers,
  GitBranch,
} from 'lucide-react'

const SKILLS = [
  // Core UI / Frontend
  { name: 'React', Icon: Code2 },
  { name: 'Vite', Icon: RocketIcon },
  { name: 'TypeScript', Icon: Cpu },
  { name: 'Tailwind CSS', Icon: Wind },

  // Backend & DevOps
  { name: 'Node.js', Icon: Server },
  { name: 'Express', Icon: GitBranch },
  { name: 'Docker', Icon: Box },
  { name: 'AWS', Icon: Cloud },

  // Databases & Languages (updated per your request)
  { name: 'MongoDB', Icon: Leaf },
  { name: 'SQL', Icon: Database },
  { name: 'Java', Icon: Coffee },

  // Stacks (added per your request)
  { name: 'MERN Stack', Icon: Layers },
  { name: 'Spring Boot', Icon: Leaf },
]

// Minimal rocket glyph for Vite (no extra deps)
function RocketIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M14.5 3.5c2.9.3 5.8 3.2 6.1 6.1-2 .7-4.4 2.2-6.6 4.4-2.2 2.2-3.7 4.6-4.4 6.6-2.9-.3-5.8-3.2-6.1-6.1.9-.3 1.8-.9 2.8-1.9l1.2-1.2c.4-.4.6-.9.7-1.4.2-1.2.7-2.3 1.6-3.2 1.5-1.5 2.9-2.7 4.7-3.3z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="15.5" cy="8.5" r="1.5" fill="white" />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="section-title">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="card px-4 py-3 text-sm flex items-center gap-3"
            title={s.name}
          >
            <s.Icon className="w-5 h-5 opacity-90" />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
