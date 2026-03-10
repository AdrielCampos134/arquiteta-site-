"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About({ about }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="page-shell grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-44 overflow-hidden rounded-full border border-gray-light"
        >
          <Image src="/images/projetos/projeto-3.svg" alt="Ana Costa" width={512} height={512} className="h-auto w-full grayscale" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="section-title text-4xl">{about.nome}</h1>
          <p className="section-eyebrow mt-2">{about.titulo}</p>
          <div className="section-copy mt-6 space-y-4">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="section-card p-5 sm:p-6">
          <h2 className="section-title text-2xl">Filosofia de trabalho</h2>
          <ul className="section-copy mt-5 space-y-3">
            {about.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-pastel-azul" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="section-card p-5 sm:p-6">
          <h2 className="section-title text-2xl">Timeline</h2>
          <div className="relative mt-5 space-y-5 border-l border-gray-light pl-6">
            {about.timeline.map((item, index) => (
              <motion.div
                key={item.evento}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-pastel-rosa" />
                <p className="text-sm uppercase tracking-wider text-gray-med">{item.ano}</p>
                <p className="section-copy text-black">{item.evento}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
