"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="tablet:gap-35 desktop:gap-60 flex w-full flex-col gap-30 px-4 pt-30 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-crimson tablet:text-[8.75rem] tablet:leading-[80%] tablet:tracking-tighter desktop:text-[10rem] desktop:leading-[85%] text-[4.75rem] leading-[85%] tracking-[-0.0425em]"
      >
        Browse everything.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="bg-mid-green tablet:px-5.5 desktop:px-36.5 flex h-90.5 items-end justify-center rounded-[30px] px-9"
      >
        <Image
          src="/ipad.svg"
          alt="iPad"
          width={907}
          height={644}
          className="tablet:block hidden h-auto w-auto"
        />
        <Image
          src="/iphone.svg"
          alt="iPhone"
          width={270}
          height={540}
          className="tablet:hidden h-auto w-auto"
        />
      </motion.div>
    </div>
  );
}
