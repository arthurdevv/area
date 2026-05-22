import { motion } from "framer-motion";
import Image from "next/image";

interface ColumnProps {
  title: string;
  font: string;
  items: [string, boolean][];
}

function Column({ title, font, items }: ColumnProps) {
  return (
    <div
      className="tablet:flex-[1_0_0] flex flex-col rounded-[20px]"
      style={
        title === "Area"
          ? {
              border: "1px solid var(--divider)",
              boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)",
            }
          : { borderTop: "1px solid transparent" }
      }
    >
      <div
        className="tablet:px-6 tablet:full tablet:max-h-24 relative pt-10 pb-6.25 text-center"
        style={{
          color: title === "Area" ? "var(--foreground)" : "var(--paragraph)",
        }}
      >
        <div
          aria-hidden="true"
          style={{ width: "100%", inset: "unset", bottom: 0 }}
        />
        <h3
          className="text-[24px] leading-[1.2] font-medium tracking-[-0.08em] whitespace-pre"
          style={{ fontFamily: font }}
        >
          {title}
        </h3>
      </div>
      {items.map(([label, checked], index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: false positive
          key={index}
          className="desktop:gap-2.5 border-divider flex min-w-50 items-center gap-2 border-b p-8 whitespace-nowrap last:border-b-0"
          style={
            title === "WebSurge"
              ? { borderRight: "1px solid var(--divider)" }
              : undefined
          }
        >
          <Image
            src={checked ? "/icons/check.svg" : "/icons/close.svg"}
            alt={checked ? "Checked" : "Not checked"}
            width={8}
            height={8}
          />
          <p className="desktop:text-[0.75rem] text-foreground font-roboto-mono text-[0.6563rem] leading-[140%] tracking-[-0.01em]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Specs() {
  return (
    <section id="specs">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="tablet:px-0 tablet:gap-5 flex w-full flex-col gap-25 px-4 pb-30"
      >
        <div className="tablet:p-20 tablet:gap-10 relative flex flex-col items-center gap-7.5 pt-20 text-center">
          <div aria-hidden="true" />
          <p className="desktop:text-[0.75rem] tablet:text-[0.6875rem] font-roboto-mono text-captions text-[0.6563rem] leading-[140%] tracking-[-0.01em]">
            Specs
          </p>
          <h2 className="desktop:text-[3.75rem] tablet:text-[3.375rem] font-crimson text-[3.125rem] leading-[90%] tracking-[-0.01em]">
            Why Choose Area?
          </h2>
          <p className="text-paragraph text-[0.9375rem] leading-[140%] tracking-[-0.075px]">
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.
          </p>
          <a
            href="/"
            className="text-foreground bg-button hover:text-background hover:bg-mid-green w-fit rounded-full px-5.5 py-3.5 text-[0.875rem] leading-[140%] font-bold tracking-tight transition-colors duration-300 ease-linear"
          >
            <p>Discover More</p>
          </a>
        </div>
        <div className="tablet:overflow-hidden flex overflow-x-auto overflow-y-clip">
          <Column
            title="Area"
            font="var(--font-sans)"
            items={[
              ["Ultra-fast browsing", true],
              ["Advanced AI insights", true],
              ["Seamless integration", true],
              ["Advanced AI insights", true],
              ["Ultra-fast browsing", true],
              ["Full UTF-8 support", true],
            ]}
          />
          <Column
            title="WebSurge"
            font="var(--font-rethink-sans)"
            items={[
              ["Fast browsing", true],
              ["Basic AI recommendations", true],
              ["Restricts customization", true],
              ["Basic AI insights", false],
              ["Fast browsing", true],
              ["Potential display errors", false],
            ]}
          />
          <Column
            title="HyperView"
            font="var(--font-reddit-mono)"
            items={[
              ["Moderate speeds", false],
              ["No AI assistance", false],
              ["Steep learning curve", false],
              ["No AI assistance", false],
              ["Moderate speeds", false],
              ["Partial UTF-8 support", false],
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}
