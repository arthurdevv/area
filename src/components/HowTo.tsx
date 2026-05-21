import { motion } from "framer-motion";
import Image from "next/image";

interface LockupProps {
  index: number;
  title: string;
  description: string;
}

function Lockup({ index, title, description }: LockupProps) {
  return (
    <div className="relative flex min-h-px w-full min-w-60 flex-[1_0_0] flex-col items-start gap-15 pt-15 pr-7.5 pb-5">
      <div aria-hidden="true" />
      <h2 className="tablet:text-[5rem] text-counter text-[4rem] leading-none tracking-[-0.04em]">{`0${index}`}</h2>
      <div className="flex flex-col gap-5">
        <h4 className="font-crimson text-[1.125rem] leading-none tracking-[-0.03em]">
          {title}
        </h4>
        <p
          className="text-paragraph text-[0.9375rem] leading-[140%] tracking-[-0.075px]"
          style={{ wordBreak: "break-word" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-to">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative flex w-full flex-col gap-20 pt-20 pb-10"
      >
        <div aria-hidden="true" />
        <div className="tablet:flex-row tablet:items-center tablet:justify-between flex flex-col gap-10">
          <h2 className="tablet:text-[3.375rem] font-crimson text-[3.125rem] leading-none tracking-[-0.01em]">
            Map Your Success
          </h2>
          <a
            href="/"
            className="text-foreground bg-button hover:text-background hover:bg-mid-green w-fit rounded-full px-5.5 py-3.5 text-[0.875rem] leading-[140%] font-bold tracking-tight transition-colors duration-300 ease-linear"
          >
            <p>Discover More</p>
          </a>
        </div>
        <div className="flex gap-5 overflow-x-auto overflow-y-clip">
          <Lockup
            index={1}
            title="Get Started"
            description="With our intuitive setup, you’re up and running in minutes."
          />
          <Lockup
            index={2}
            title="Customize and Configure"
            description="Adapt Area to your specific requirements and preferences."
          />
          <Lockup
            index={3}
            title="Grow Your Business"
            description="Make informed decisions to exceed your goals."
          />
        </div>
        <div className="desktop:h-198.75 tablet:h-166.25 tablet:mt-10 mt-5 h-150 w-full">
          <Image
            src="/images/hero-how_it_works.avif"
            alt="How it works"
            width={1200}
            height={675}
            className="h-full w-full rounded-[30px] object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
