"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.32, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="desktop:pt-0 tablet:px-0 desktop:max-w-375 tablet:gap-35 desktop:gap-60 flex w-full flex-col gap-30 px-4 pt-37.5 text-center"
    >
      <h1 className="desktop:tracking-[-12.8px] tablet:tracking-[-9.8px] tablet:text-[8.75rem] tablet:leading-[80%] desktop:text-[10rem] desktop:leading-[85%] font-crimson text-[4.75rem] leading-[85%] tracking-[-2.6px]">
        Browse everything.
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.01, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tablet:relative bg-mid-green tablet:px-5.5 desktop:px-36.5 flex h-90.5 items-end justify-center rounded-[30px] px-9"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.01, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/ipad.svg"
            alt="iPad"
            width={907}
            height={644}
            className="desktop:h-132 desktop:w-237.5 tablet:block tablet:h-125 tablet:w-177.5 hidden h-auto w-auto"
          />
          <Image
            src="/iphone.svg"
            alt="iPhone"
            width={270}
            height={540}
            className="tablet:hidden h-auto w-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
