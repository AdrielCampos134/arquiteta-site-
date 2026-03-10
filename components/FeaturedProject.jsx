"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturedProject({ project }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section className="section-card mx-auto grid max-w-6xl gap-6 p-4 sm:p-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-eyebrow">Projeto destaque</p>
        <h2 className="section-title mt-2 text-2xl sm:text-3xl">{project.titulo}</h2>
        <p className="section-copy mt-3 text-sm sm:text-base">{project.descricao}</p>
      </motion.div>

      <motion.div style={{ y }} className="overflow-hidden rounded-sm border border-gray-light bg-white">
        <Image
          src={project.imagem}
          alt={project.titulo}
          width={1440}
          height={900}
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
}
