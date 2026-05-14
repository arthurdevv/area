import Image from "next/image";

export default function Hero() {
  return (
    <div className="tablet:gap-35 desktop:gap-60 tablet:mt-0 mt-10.5 flex w-full flex-col gap-30 text-center">
      <h1 className="font-crimson tablet:text-[140px] tablet:leading-[80%] tablet:tracking-tighter desktop:text-[160px] desktop:leading-[85%] desktop:tracking-tighter text-[76px] leading-[85%] tracking-[-0.045em]">
        Browse everything.
      </h1>
      <div className="bg-mid-green flex h-90.5 items-end justify-center rounded-[30px]">
        <Image
          src="/ipad.svg"
          alt="iPad"
          width={907}
          height={644}
          className="tablet:block hidden h-auto w-auto"
        />
        <Image
          src="/iphone.svg"
          alt="iPhone"
          width={270}
          height={540}
          className="tablet:hidden h-auto w-auto"
        />
      </div>
    </div>
  );
}
