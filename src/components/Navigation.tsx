export default function Navigation() {
  return (
    <nav className="text-foreground tablet:flex desktop:flex fixed top-4 left-1/2 hidden max-h-15 -translate-x-1/2 transform items-center justify-center gap-7 rounded-full px-6 py-5 font-sans text-[0.875rem] font-bold whitespace-nowrap backdrop-blur-[30px]">
      <a href="#benefits">Benefits</a>
      <a href="#specs">Specifications</a>
      <a href="#how-to">How-to</a>
      <a href="#contact">Contact Us</a>
    </nav>
  );
}
