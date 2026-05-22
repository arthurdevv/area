import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section id="testimonial">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="desktop:flex-row desktop:gap-5 tablet:pb-45 tablet:px-0 relative flex flex-col gap-10 px-4 pb-25"
      >
        <div className="desktop:h-201.25 desktop:w-177.5 aspect-square w-full">
          <Image
            src="/images/hero-testimonial.avif"
            alt="Testimonial"
            width={343}
            height={343}
            className="h-full w-full rounded-[30px] object-cover object-center"
          />
        </div>
        <div className="desktop:pb-42 desktop:justify-center desktop:pl-12.5 tablet:px-0 relative flex flex-col gap-12.5 px-4 pt-10">
          <div aria-hidden="true" />
          <p className="desktop:leading-[1.04] tablet:text-[2.5rem] font-crimson text-[2rem] leading-[110%] tracking-[-0.64px] whitespace-pre-wrap">
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it.”
          </p>
          <div className="desktop:flex-col desktop:items-start flex items-center gap-2">
            <p className="text-[0.9375rem] leading-[140%]">John Smith</p>
            <p className="desktop:text-[0.75rem] tablet:text-[0.6875rem] text-captions font-roboto-mono text-[0.6563rem] leading-[140%]">
              Head of Data
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
