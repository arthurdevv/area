"use client";

import Image from "next/image";
import { useState } from "react";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MenuLink({ href, children, onClick }: MenuLinkProps) {
  return (
    <a
      href={href}
      className="relative flex items-start py-7.5 font-sans text-[0.875rem] leading-[140%] font-bold tracking-tight"
      onClick={onClick}
    >
      <div aria-hidden="true" />
      {children}
    </a>
  );
}

function Menu({ isOpen, toggleMenu }: MenuProps) {
  return (
    <div
      className="tablet:hidden overflow-hidden opacity-0 transition-all duration-800 ease-out"
      style={{ maxHeight: isOpen ? "600px" : "0", opacity: isOpen ? 1 : 0 }}
    >
      <nav
        className="flex-col pb-6"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <MenuLink href="#benefits" onClick={toggleMenu}>
          Benefits
        </MenuLink>
        <MenuLink href="#specs" onClick={toggleMenu}>
          Specifications
        </MenuLink>
        <MenuLink href="#how-to" onClick={toggleMenu}>
          How-to
        </MenuLink>
        <MenuLink href="#contact" onClick={toggleMenu}>
          Contact Us
        </MenuLink>
      </nav>
      <a
        href="/"
        className="text-background bg-captions flex w-fit items-center justify-center gap-1 rounded-full px-5.5 py-3.5 text-center text-[0.875rem] font-bold tracking-[-0.025em]"
        style={{ display: isOpen ? "flex" : "none" }}
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
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header
      className="tablet:shadow-none tablet:border-none bg-background fixed z-10 w-full overflow-clip rounded-br-[20px] rounded-bl-[20px] px-5 py-5 font-sans shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]"
      style={{ paddingBottom: isMenuOpen ? "2rem" : "1rem" }}
    >
      <div
        className="relative flex items-center justify-between"
        style={{ paddingBottom: isMenuOpen ? "3.125rem" : "0" }}
      >
        <a href="/" className="text-[1.875rem] font-medium tracking-[-5%]">
          Area
        </a>
        <a
          href="/"
          className="bg-accent-1 text-background tablet:inline-flex hidden items-center gap-1 rounded-full px-5.5 py-3.5 text-[0.875rem] font-bold"
        >
          <p>Learn More</p>
          <Image
            src="/icons/arrow-up.svg"
            alt="Arrow up"
            width={10}
            height={10}
          />
        </a>
        <button
          type="button"
          className="tablet:hidden flex h-5 w-5 items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={isMenuOpen ? "/icons/x.svg" : "/icons/menu.svg"}
            alt="Menu"
            width={18}
            height={12}
            className="h-auto w-auto"
            style={{ aspectRatio: "1" }}
          />
        </button>
      </div>
      <Menu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
    </header>
  );
}
