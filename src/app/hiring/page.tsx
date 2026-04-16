import HiringNavbar from "@/components/hiring/HiringNavbar";
import HiringHero from "@/components/hiring/HiringHero";
import HiringAbout from "@/components/hiring/HiringAbout";
import HiringBenefits from "@/components/hiring/HiringBenefits";
import HiringFooterCta from "@/components/hiring/HiringFooterCta";

export const metadata = {
  title: "Hiring - Medsta",
  description: "Join Medsta and build something meaningful. Partner with our hustlers in Lucknow today.",
};

export default function HiringPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-healthcare-blue-100 selection:text-healthcare-blue-900">
      <HiringNavbar />
      <HiringHero />
      <HiringAbout />
      <HiringBenefits />
      <HiringFooterCta />
    </main>
  );
}
