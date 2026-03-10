"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-5xl"
    >
      <div className="page-shell text-left">
        <p className="section-title text-4xl sm:text-6xl">Ana Costa</p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-gray-med sm:text-base sm:tracking-[0.22em]">
          Arquiteta | Design Minimalista
        </p>
        <p className="section-copy mt-4 max-w-xl text-sm sm:text-base">
          Espacos calmos, funcionais e elegantes. Projetos pensados para o cotidiano com menos excesso e mais intencao.
        </p>

        <div className="relative mt-6 overflow-hidden rounded-lg border border-gray-light bg-white">
          <Image
            src="/images/projetos/projeto-1.svg"
            alt="Projeto em destaque"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mt-5">
          <Button href="/portfolio" variant="border" className="w-full sm:w-auto">
            Explorar trabalhos
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
