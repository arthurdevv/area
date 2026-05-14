import Image from "next/image";

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="desktop:w-38.5 desktop:h-21 flex items-center justify-center p-5">
      <Image
        src={src}
        alt={alt}
        width={110}
        height={42}
        className="desktop:w-28.5 desktop:h-11"
      />
    </div>
  );
}

export default function Trusted() {
  return (
    <div className="text-paragraph py-12.5 font-sans">
      <p>Trusted by:</p>
      <div className="tablet:flex desktop:px-15 desktop:justify-between mt-7.5 grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-5">
        <Logo src="/logo-1.svg" alt="Logo 1" />
        <Logo src="/logo-2.svg" alt="Logo 2" />
        <Logo src="/logo-3.svg" alt="Logo 3" />
        <Logo src="/logo-4.svg" alt="Logo 4" />
        <Logo src="/logo-5.svg" alt="Logo 5" />
        <Logo src="/logo-6.svg" alt="Logo 6" />
      </div>
    </div>
  );
}
