import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="desktop:px-75 tablet:py-30 tablet:px-25 relative flex w-full flex-col gap-10 py-30 text-center"
      >
        <div aria-hidden="true" />
        <h2 className="desktop:text-[3.75rem] tablet:text-[3.375rem] font-crimson text-[3.125rem] leading-none tracking-[-0.01em]">
          Connect with us
        </h2>
        <span className="text-paragraph font-sans text-[0.9375rem] leading-[140%] tracking-[-0.075px]">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </span>
        <a
          href="/"
          className="text-background bg-captions flex items-center justify-center gap-1 rounded-full py-3.5 text-center text-[0.875rem] font-bold tracking-tight transition-opacity duration-300 ease-linear hover:opacity-55"
        >
          <p>Learn More</p>
          <div className="inline-flex h-2 w-2 items-center justify-center">
            <Image
              src="/icons/arrow-up.svg"
              alt="Arrow up"
              width={24}
              height={24}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
