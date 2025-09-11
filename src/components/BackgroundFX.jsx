
import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.6), transparent)' }}
      />
      <motion.div
        initial={{ y: 30, opacity: 0.0 }}
        animate={{ y: -10, opacity: 0.35 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute -bottom-24 -right-20 w-[560px] h-[560px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.6), transparent)' }}
      />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
    </div>
  )
}
