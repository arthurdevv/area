import Image from "next/image";

export default function Header() {
  return (
    <header className="tablet:shadow-none tablet:h-37 flex h-19.5 w-full items-start justify-between py-5 font-sans shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
      <a href="/" className="text-[1.875rem] font-medium tracking-[-5%]">
        Area
      </a>
      <a
        href="/"
        className="bg-accent-1 text-background tablet:inline-flex hidden items-center gap-1 rounded-full px-5.5 py-3.5 text-[14px] font-bold"
      >
        <p>Learn More</p>
        <Image src="/arrow-up.svg" alt="Arrow up" width={10} height={10} />
      </a>
      <button
        type="button"
        className="tablet:hidden flex h-6 w-6 items-center justify-center"
      >
        <Image src="/menu.svg" alt="Menu" width={18} height={12} />
      </button>
    </header>
  );
}
