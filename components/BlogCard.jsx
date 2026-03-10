"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="group section-card overflow-hidden"
    >
      <div className="overflow-hidden">
        <Image
          src={post.imagem}
          alt={post.titulo}
          width={1000}
          height={700}
          className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-2 p-5 sm:p-6">
        <span className="inline-block rounded-full bg-pastel-bege px-3 py-1 text-xs text-gray-med transition-colors group-hover:bg-pastel-rosa">
          {post.categoria}
        </span>
        <h3 className="section-title text-2xl">{post.titulo}</h3>
        <p className="text-sm text-gray-med">{post.data}</p>
        <p className="section-copy">{post.excerpt}</p>
      </div>
    </motion.article>
  );
}
