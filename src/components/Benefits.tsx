import { motion } from "framer-motion";
import Image from "next/image";

import {
  AmplifyIcon,
  GlobalIcon,
  GrowthIcon,
  LanguageIcon,
} from "@/components/icons";

interface IconLockupProps {
  index: number;
  title: string;
  label: string;
  icon: React.JSX.Element;
}

function IconLockup({ index, title, label, icon }: IconLockupProps) {
  return (
    <div
      className="tablet:min-w-66.25 tablet:flex-[1_0_0] border-divider desktop:w-71.25 desktop:h-62.5 flex flex-col gap-6 border-t py-10 pr-5"
      style={{ paddingRight: index >= 3 ? "2.5rem" : "1.25rem" }}
    >
      <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="desktop:w-full tablet:px-0 tablet:pb-30 flex flex-col gap-12.5 px-4 pb-25"
      >
        <div className="tablet:gap-12.5 relative flex flex-col gap-7.5 pt-20">
          <div aria-hidden="true" />
          <p className="desktop:text-[0.75rem] tablet:text-[0.6875rem] font-roboto-mono text-captions text-[0.6563rem] leading-[140%] tracking-[-0.01em]">
            Benefits
          </p>
          <h2 className="desktop:text-[3.75rem] tablet:text-[3.375rem] font-crimson text-[3.125rem] leading-[95%] tracking-[-0.75px]">
            We’ve cracked the code.
          </h2>
          <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-[-0.075px]">
            Area provides real insights, without the data overload.
          </p>
        </div>
        <div className="tablet:flex-row tablet:flex-wrap tablet:gap-5 flex flex-col gap-4.5 py-10 pb-0">
          <IconLockup
            index={1}
            icon={<AmplifyIcon />}
            title="Amplify Insights"
            label="Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
          />
          <IconLockup
            index={2}
            icon={<GlobalIcon />}
            title="Control Your Global Presence"
            label="Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
          />
          <IconLockup
            index={3}
            icon={<LanguageIcon />}
            title="Remove Language Barriers"
            label="Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
          />
          <IconLockup
            index={4}
            icon={<GrowthIcon />}
            title="Visualize Growth"
            label="Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
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
      </motion.div>
    </section>
  );
}
