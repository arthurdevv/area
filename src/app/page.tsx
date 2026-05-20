"use client";

import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import SmoothScroll from "@/components/SmoothScroll";
import Specs from "@/components/Specs";
import Testimonial from "@/components/Testimonial";
import Trusted from "@/components/Trusted";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Home() {
  const width = useWindowWidth();

  const breakpoint =
    width < 800 ? "mobile" : width < 1280 ? "tablet" : "desktop";

  return (
    <SmoothScroll>
      <Header />
      <main key={breakpoint}>
        <Hero />
        <Trusted />
        <Benefits />
        <Features />
        <Specs />
        <Testimonial />
        <HowTo />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
