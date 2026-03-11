"use client";

import Image from "next/image";
import { useState } from "react";

export default function FallbackImage({ src, fallbackSrc = "/images/projetos/projeto-1.svg", alt, ...props }) {
  const [errored, setErrored] = useState(false);

  return (
    <Image
      src={errored ? fallbackSrc : src}
      alt={alt}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
