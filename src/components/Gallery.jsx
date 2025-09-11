// src/components/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const IMAGES = ["/a1.png", "/a2.png", "/a3.png"];

  return (
    <section id="gallery" className="py-16">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 will-change-transform group"
            initial={{ scale: 1, y: 0, zIndex: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            whileHover={{
              scale: 1.08,
              y: -8,
              zIndex: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
            />

            {/* soft glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(124,58,237,0.12), transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
