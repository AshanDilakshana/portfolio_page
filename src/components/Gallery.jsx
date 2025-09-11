import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  // Put your images in /public/gallery/1.jpg ... 6.jpg (or .png)
  const IMAGES = Array.from({ length: 6 }).map((_, i) => `/gallery/${i + 1}.jpg`);

  return (
    <section id="gallery" className="py-16">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {IMAGES.map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 will-change-transform"
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
            {/* Image */}
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              onError={(e) => {
                // Optional: graceful fallback to the existing SVG style if image not found
                e.currentTarget.outerHTML = `
                  <svg viewBox="0 0 400 400" class="w-full h-full">
                    <defs>
                      <linearGradient id="g${i}" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stop-color="#c4b5fd"/>
                        <stop offset="1" stop-color="#7c3aed"/>
                      </linearGradient>
                    </defs>
                    <rect width="400" height="400" fill="url(#g${i})" />
                    <circle cx="200" cy="200" r="120" fill="white" opacity="0.15"/>
                  </svg>`;
              }}
            />

            {/* Soft glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
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
