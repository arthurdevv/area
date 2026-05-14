import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Trusted />
        <Benefits />
        <Features />
      </main>
    </>
  );
}
