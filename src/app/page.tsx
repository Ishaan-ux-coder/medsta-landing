import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyMedsta from "@/components/WhyMedsta";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import Coverage from "@/components/Coverage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyMedsta />
      <Trust />
      <Testimonials />
      <div className="relative overflow-hidden w-full">
        {/* The Rumi Darwaza background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/rumi-darwaza.jpeg')" }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/30 z-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-0 pointer-events-none" />
        
        <div className="relative z-10 w-full">
          <Vision />
          <Coverage />
        </div>
      </div>
    </div>
  );
}
