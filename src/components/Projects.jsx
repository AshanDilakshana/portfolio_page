import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "Road Master",
    description:
      "MERN Stack | Developed an online road failure reporting system. Users reported issues with location and images, while admins managed and updated issue statuses in real time.",
    link: "https://github.com/AshanDilakshana/Road_Master?tab=readme-ov-file#-login-page",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    demo: "",
    github: "https://github.com/AshanDilakshana/Road_Master.git",
    image: "/roadmaster.png",
  }
    ,
  {
    name: "Factory Management System",
    description:
      "React, Node.js, MongoDB | Built a full-stack MERN application with JWT auth, covering production, inventory, employee scheduling, and sales. Deployed using React and JavaScript.",
    link: "https://github.com/AshanDilakshana/factoryManagementSystem/blob/main/README.md#welcome--access",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    demo: "",
    github: "https://github.com/yourusername/factory-management",
    image: "/factory.png",
  },
  {
    name: "vehicle spare parts management system ",
    description:
      "Java, MySQL | Designed and implemented a web-based system for managing inventory, orders, and suppliers. Features included real-time stock updates, user authentication, and automated report generation for efficient resource management.",
    link: "#",
    tags: ["Java", "MySQL"],
    demo: "",
    github: "https://github.com/yourusername/spare-parts-management",
    image: "/vehical.png",
  },
  {
    name: "LearnHub Web App",
    description:
      "React, Spring Boot | Developed an online knowledge-sharing platform with a React frontend and Spring Boot backend, enabling users to efficiently share and access educational content.",
    link: "#",
    tags: ["React", "Spring Boot"],
    demo: "/",
    github: "https://github.com/yourusername/learnhub",
    image: "/learnhub.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="section-title">My Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <motion.a
            whileHover={{ rotateX: -2, rotateY: 2, translateY: -2 }}
            target="_blank"
            href={p.link}
            key={p.name}
            className="card p-5 hover:shadow-2xl transition-transform will-change-transform"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Project Image */}
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm opacity-80 mt-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn text-sm"
              >
                Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-btn text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
