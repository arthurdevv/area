function FeatureItem({
  index,
  description,
}: {
  index: number;
  description: string;
}) {
  return (
    <li className="border-divider tablet:h-auto inline-flex h-15 min-h-fit gap-7.5 border-t py-5 text-[0.9375rem] leading-[140%]">
      <h4 className="text-paragraph font-bold">
        {String(index).padStart(2, "0")}
      </h4>
      <p className="text-foreground">{description}</p>
    </li>
  );
}

export default function Features() {
  return (
    <section className="px-4">
      <div aria-hidden="true" />
      <div className="flex flex-col gap-10">
        <h2 className="font-crimson mt-15 text-[3.125rem] leading-[90%] tracking-[-0.01em]">
          See the Big Picture
        </h2>
        <p className="text-paragraph text-[0.9375rem] leading-[140%]">
          Area turns your data into clear, vibrant visuals that show you exactly
          what's happening in each region.
        </p>
      </div>
      <ul className="my-10 flex flex-col">
        <FeatureItem
          index={1}
          description="Spot Trends in Seconds: No more digging through numbers."
        />
        <FeatureItem
          index={2}
          description="Get Everyone on the Same Page: Share ease-to-understand reports with your team."
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
    </section>
  );
}
