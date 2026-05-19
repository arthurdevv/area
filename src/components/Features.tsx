"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureItemProps {
  index: number;
  description: string;
}

function FeatureItem({ index, description }: FeatureItemProps) {
  return (
    <li className="border-divider tablet:h-auto flex h-15 min-h-fit gap-7.5 border-t py-5 text-[0.9375rem] leading-[140%]">
      <h4 className="text-paragraph font-bold">
        {String(index).padStart(2, "0")}
      </h4>
      <p className="text-foreground tracking-[-0.075px]">{description}</p>
    </li>
  );
}

export default function Features() {
  return (
    <section id="#features">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex w-full flex-col gap-10 px-4 pb-20"
      >
        <div className="relative flex flex-col gap-10">
          <div aria-hidden="true" />
          <h2 className="font-crimson mt-15 text-[3.125rem] leading-[90%] tracking-[-0.01em]">
            See the Big Picture
          </h2>
          <p className="text-paragraph text-[0.9375rem] leading-[140%]">
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </p>
        </div>
        <ul className="flex flex-col">
          <FeatureItem
            index={1}
            description="Spot Trends in Seconds: No more digging through numbers."
          />
          <FeatureItem
            index={2}
            description="Get Everyone on the Same Page: Share easy-to-understand reports with your team."
          />
          <FeatureItem
            index={3}
            description="Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
          />
          <FeatureItem
            index={4}
            description="Your Global Snapshot: Get a quick, clear overview of your entire operation."
          />
        </ul>
        <a
          href="/"
          className="text-foreground bg-button focus:text-background focus:bg-mid-green w-fit rounded-full px-5.5 py-3.5 text-[0.875rem] leading-[140%] font-bold tracking-tight transition-colors"
        >
          Discover More
        </a>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full pt-10"
        >
          <Image
            src="/images/hero-features.avif"
            alt="Features"
            width={365}
            height={385}
            className="aspect-square h-auto w-auto rounded-[30px] object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
