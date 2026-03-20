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
      <Vision />
      <Coverage />
    </div>
  );
}
