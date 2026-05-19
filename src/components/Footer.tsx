import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div aria-hidden="true" />
      <div className="flex flex-col gap-20 px-4 pt-10 pb-5">
        <div className="flex flex-col gap-6.5 font-sans text-[0.875rem] leading-[140%] font-bold tracking-tight">
          <a href="#benefits">Benefits</a>
          <a href="#specs">Specifications</a>
          <a href="#how-to">How-to</a>
        </div>
        <div className="text-captions font-roboto-mono flex items-end gap-10 text-[0.6563rem] leading-[140%] tracking-[-0.01em]">
          <Image src="/icons/union.svg" alt="Union" width={32} height={70} />
          <div className="mr-auto flex gap-4 pr-8">
            <p>© Area.</p>
            <p>2025</p>
          </div>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
