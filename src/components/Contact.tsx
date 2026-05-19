import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div aria-hidden="true" />
      <div className="flex w-full flex-col gap-10 py-30 text-center">
        <h2 className="font-crimson text-[3.125rem] leading-none tracking-[-0.01em]">
          Connect with us
        </h2>
        <p className="text-paragraph font-sans text-[0.9375rem] leading-[140%]">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <a
          href="/"
          className="text-background bg-captions flex items-center justify-center gap-1 rounded-full py-3.5 text-center text-[0.875rem] font-bold tracking-[-0.025em]"
        >
          Learn More
          <div className="inline-flex h-2 w-2 items-center justify-center">
            <Image
              src="/icons/arrow-up.svg"
              alt="Arrow up"
              width={24}
              height={24}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
