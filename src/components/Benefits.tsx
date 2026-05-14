import Image from "next/image";

function IconLockup({
  title,
  label,
  src,
}: {
  title: string;
  label: React.ReactNode[];
  src: string;
}) {
  return (
    <div className="border-divider desktop:w-71.25 desktop:h-62.5 flex flex-col gap-6 border-t py-10">
      <div className="h-6 w-6">
        <Image src={src} alt={title} width={24} height={24} />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-crimson text-[1.125rem] leading-[100%] tracking-[-0.03em]">
          {title}
        </h3>
        <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-tighter">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section>
      <div className="mt-20 flex flex-col gap-12.5">
        <div className="flex flex-col gap-7.5">
          <p className="font-roboto-mono text-captions text-[0.75rem] leading-[140%] tracking-[-0.01em]">
            Benefits
          </p>
          <h2 className="font-crimson text-[3.75rem] leading-[90%] tracking-[-0.03em]">
            We’ve cracked
            <br />
            the code.
          </h2>
          <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-tighter">
            Area provides real insights, without the data
            <br className="tablet:hidden" />
            overload.
          </p>
        </div>
        <div className="desktop:flex-row flex flex-col gap-5 py-10">
          <IconLockup
            src="/amplify.svg"
            title="Amplify Insights"
            label={[
              "Unlock data-driven decisions with",
              <br key={0} />,
              "comprehensive analytics, revealing key",
              <br key={1} />,
              "opportunities for strategic regional growth.",
            ]}
          />
          <IconLockup
            src="/global.svg"
            title="Control Your Global Presence"
            label={[
              "Manage and track satellite offices, ensuring ",
              <br key={0} />,
              "consistent performance and streamlined",
              <br key={1} />,
              "operations everywhere.",
            ]}
          />
          <IconLockup
            src="/language.svg"
            title="Remove Language Barriers"
            label={[
              "Adapt to diverse markets with built-in",
              <br key={0} />,
              "localization for clear communication and ",
              <br key={1} />,
              "enhanced user experience.",
            ]}
          />
          <IconLockup
            src="/growth.svg"
            title="Visualize Growth"
            label={[
              "Generate precise, visually compelling",
              <br key={0} />,
              "reports that illustrate your growth",
              <br key={1} />,
              "trajectories across all regions.",
            ]}
          />
        </div>
      </div>
      <Image
        src="/hero.png"
        alt="Hero"
        width={343}
        height={600}
        className="tablet:mb-30 mb-25 rounded-[30px]"
      />
    </section>
  );
}
