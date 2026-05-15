import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trusted />
        <Benefits />
        <Features />
      </main>
      <Footer />
    </>
  );
}
