import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-24 md:scroll-mt-30">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About
      </motion.h2>
      <div className="card p-6">
        <p className="opacity-80">
          I am an Information Technology undergraduate with a strong foundation
          in programming, data analysis, and problem-solving. Passionate about
          applying technology to real-world challenges, I enjoy building
          creative solutions, exploring data-driven insights, and continuously
          learning new tools. My goal is to grow as a professional in areas like
          software development, data science, and emerging technologies, while
          collaborating on impactful projects.
        </p>
        <div className="mt-2 flex flex-wrap gap-3 justify-end">
          <a
            href="/Ashan-Dilakshana-CV.pdf"
            download="Ashan-Dilakshana-CV.pdf"
            className="soft-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
