import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Stats />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
