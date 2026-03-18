import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyMedsta from "@/components/WhyMedsta";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Coverage from "@/components/Coverage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyMedsta />
      <Trust />
      <Testimonials />
      <Vision />
      <About />
      <Coverage />
    </div>
  );
}
