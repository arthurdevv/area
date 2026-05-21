interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
}

function NavigationItem({ href, children }: NavigationItemProps) {
  return (
    <a
      href={href}
      className="tracking-[-0.35px] transition-opacity duration-300 ease-linear hover:opacity-55"
    >
      {children}
    </a>
  );
}

export default function Navigation() {
  return (
    <nav className="desktop:px-6 desktop:py-5 tablet:flex text-foreground fixed left-1/2 z-50 hidden max-h-15 -translate-x-1/2 items-center justify-center gap-7 rounded-full bg-[#ffffff66] px-5 py-6 font-sans text-[0.875rem] font-bold whitespace-nowrap backdrop-blur-[30px]">
      <NavigationItem href="#benefits">Benefits</NavigationItem>
      <NavigationItem href="#specs">Specifications</NavigationItem>
      <NavigationItem href="#how-to">How-to</NavigationItem>
      <NavigationItem href="#contact">Contact Us</NavigationItem>
    </nav>
  );
}
