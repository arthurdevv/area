import { motion } from "framer-motion";
import Image from "next/image";

interface IconLockupProps {
  index: number;
  title: string;
  label: string;
  src: string;
}

function IconLockup({ index, title, label, src }: IconLockupProps) {
  return (
    <div
      className="border-divider desktop:w-71.25 desktop:h-62.5 flex flex-col gap-6 border-t py-10 pr-5"
      style={{ paddingRight: index >= 3 ? "2.5rem" : "1.25rem" }}
    >
      <div className="flex h-6 w-6 items-center justify-center">
        <Image
          src={src}
          alt={title}
          width={20}
          height={20}
          className="h-auto w-auto"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-crimson text-[1.125rem] leading-[100%] tracking-[-0.03em]">
          {title}
        </h3>
        <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-[-0.005em]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="relative flex flex-col gap-12.5 pt-20 pb-25">
        <div aria-hidden="true" />
        <div className="flex flex-col gap-7.5">
          <p className="font-roboto-mono text-captions tablet:text-[0.75rem] text-[0.6563rem] leading-[140%] tracking-[-0.01em]">
            Benefits
          </p>
          <h2 className="font-crimson tablet:text-[3.75rem] text-[3.125rem] leading-[95%] tracking-[-0.75px]">
            We’ve cracked the code.
          </h2>
          <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-[-0.075px]">
            Area provides real insights, without the data overload.
          </p>
        </div>
        <div className="desktop:flex-row flex flex-col gap-4.5 py-10">
          <IconLockup
            index={1}
            src="/icons/amplify.svg"
            title="Amplify Insights"
            label="Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
          />
          <IconLockup
            index={2}
            src="/icons/global.svg"
            title="Control Your Global Presence"
            label="Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
          />
          <IconLockup
            index={3}
            src="/icons/language.svg"
            title="Remove Language Barriers"
            label="Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
          />
          <IconLockup
            index={4}
            src="/icons/growth.svg"
            title="Visualize Growth"
            label="Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full pt-2.5"
        >
          <Image
            src="/images/hero-benefits.avif"
            alt="Benefits"
            width={343}
            height={600}
            className="h-150 w-full rounded-[30px] object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
