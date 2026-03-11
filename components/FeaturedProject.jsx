"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import FallbackImage from "@/components/ui/FallbackImage";

export default function FeaturedProject({ project }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section className="section-card mx-auto grid max-w-6xl gap-5 overflow-hidden p-4 sm:gap-6 sm:p-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-eyebrow">Projeto destaque</p>
        <h2 className="section-title mt-2 text-2xl sm:text-5xl">{project.titulo}</h2>
        <p className="section-copy mt-3 max-w-lg text-sm sm:text-base">{project.descricao}</p>
        <div className="mt-5 inline-flex rounded-full bg-pastel-bege/55 px-4 py-2 text-xs uppercase tracking-[0.14em] text-gray-med">
          {project.categoria} · {project.ano}
        </div>
      </motion.div>

      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.01 }}
        className="overflow-hidden rounded-2xl border border-gray-light/80 bg-white"
      >
        <FallbackImage
          src={project.imagem}
          fallbackSrc="/images/projetos/projeto-2.svg"
          alt={project.titulo}
          width={1440}
          height={900}
          className="h-[220px] w-full object-cover sm:h-[380px] lg:h-[430px]"
        />
      </motion.div>
    </section>
  );
}
