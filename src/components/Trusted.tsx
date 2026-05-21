"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
}

function Logo({ src, alt }: LogoProps) {
  return (
    <div className="desktop:w-38.5 desktop:h-21 flex items-center justify-center p-5">
      <Image
        src={src}
        alt={alt}
        width={110}
        height={42}
        className="desktop:w-28.5 desktop:h-11 contrast-50"
      />
    </div>
  );
}

export default function Trusted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.32, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="tablet:px-0 text-paragraph px-4 py-12.5 font-sans"
    >
      <p className="text-[0.9375rem]">Trusted by:</p>
      <div className="tablet:flex desktop:px-15 mt-7.5 flex flex-wrap justify-center gap-x-10 gap-y-5">
        <Logo src="/icons/logo-1.svg" alt="Logo 1" />
        <Logo src="/icons/logo-2.svg" alt="Logo 2" />
        <Logo src="/icons/logo-3.svg" alt="Logo 3" />
        <Logo src="/icons/logo-4.svg" alt="Logo 4" />
        <Logo src="/icons/logo-5.svg" alt="Logo 5" />
        <Logo src="/icons/logo-6.svg" alt="Logo 6" />
      </div>
    </motion.div>
  );
}
