import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 9 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-10 pb-25"
      >
        <div className="aspect-square w-full">
          <Image
            src="/images/hero-testimonial.avif"
            alt="Testimonial"
            width={343}
            height={343}
            className="h-full w-full rounded-[30px] object-cover object-[50%]"
          />
        </div>
        <div className="relative flex flex-col gap-12.5 px-4 pt-10">
          <div aria-hidden="true" />
          <p className="font-crimson text-[32px] leading-[110%] tracking-[-0.4px] whitespace-pre-wrap">
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it.”
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[0.9375rem] leading-[140%] tracking-tighter">
              John Smith
            </p>
            <p className="text-captions font-roboto-mono text-[0.6563rem] leading-[140%]">
              Head of Data
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
