"use client";

import { motion } from "framer-motion";
import FallbackImage from "@/components/ui/FallbackImage";

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group section-card overflow-hidden"
    >
      <div className="overflow-hidden">
        <FallbackImage
          src={post.imagem}
          fallbackSrc="/images/blog/blog-1.svg"
          alt={post.titulo}
          width={1000}
          height={700}
          className="h-[230px] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="space-y-2 p-5 sm:p-6">
        <span className="inline-block rounded-full bg-pastel-bege px-3 py-1 text-xs text-gray-med transition-colors group-hover:bg-pastel-rosa/80">
          {post.categoria}
        </span>
        <h3 className="section-title text-2xl">{post.titulo}</h3>
        <p className="text-sm text-gray-med">{post.data}</p>
        <p className="section-copy">{post.excerpt}</p>
      </div>
    </motion.article>
  );
}
