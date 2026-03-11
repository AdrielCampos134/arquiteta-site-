"use client";

import { motion } from "framer-motion";
import FallbackImage from "@/components/ui/FallbackImage";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group section-card overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <FallbackImage
          src={project.imagem}
          fallbackSrc="/images/projetos/projeto-3.svg"
          alt={project.titulo}
          width={900}
          height={700}
          className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:opacity-90"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="space-y-1 p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-gray-med">{project.categoria}</p>
        <h3 className="section-title text-xl">{project.titulo}</h3>
        <p className="text-sm text-gray-med">{project.ano}</p>
      </div>
    </motion.article>
  );
}
