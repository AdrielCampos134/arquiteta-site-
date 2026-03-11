"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FallbackImage from "@/components/ui/FallbackImage";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-6xl"
    >
      <div className="page-shell relative overflow-hidden text-left">
        <div className="absolute -left-16 top-12 h-44 w-44 rounded-full bg-pastel-rosa/35 blur-3xl" />
        <div className="absolute -right-14 bottom-8 h-56 w-56 rounded-full bg-pastel-azul/35 blur-3xl" />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Estudio autoral</p>
            <p className="section-title mt-2 text-4xl sm:text-7xl">Ana Costa</p>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-gray-med sm:text-base sm:tracking-[0.2em]">
              Arquitetura Contemporanea com alma brasileira
            </p>
            <p className="section-copy mt-4 max-w-xl text-sm sm:mt-5 sm:text-base">
              Projetos residenciais e corporativos com atmosfera sensorial, ritmo espacial e materiais honestos. Cada detalhe e pensado para surpreender sem excessos.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <Button href="/portfolio" variant="border" className="w-full sm:w-auto">
                Explorar trabalhos
              </Button>
              <Button href="/contato" variant="minimal" className="w-full sm:w-auto">
                Iniciar projeto
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.75 }}
              className="overflow-hidden rounded-2xl border border-gray-light/70"
            >
              <FallbackImage
                src="/images/arquitetura/projeto-1.jpg"
                fallbackSrc="/images/projetos/projeto-1.svg"
                alt="Projeto em destaque"
                width={1600}
                height={1000}
                className="h-[280px] w-full object-cover sm:h-[420px]"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="soft-float glass-border absolute -bottom-3 left-3 hidden max-w-[200px] rounded-2xl bg-white/80 p-3 backdrop-blur min-[430px]:block sm:-bottom-4 sm:-left-4 sm:max-w-[240px]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-gray-med">Nova colecao</p>
              <p className="mt-1 font-serif text-lg text-black">Interiores 2026</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
