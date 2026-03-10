"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group section-card overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.imagem}
          alt={project.titulo}
          width={900}
          height={700}
          className="h-auto w-full transition duration-300 group-hover:scale-[1.02] group-hover:opacity-80"
        />
      </div>

      <div className="space-y-1 p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-gray-med">{project.categoria}</p>
        <h3 className="section-title text-xl">{project.titulo}</h3>
        <p className="text-sm text-gray-med">{project.ano}</p>
      </div>
    </motion.article>
  );
}
