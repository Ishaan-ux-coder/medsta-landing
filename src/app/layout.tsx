import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Medsta | Healthcare Services at Home",
  description: "Book doctor consultations, lab tests, medicines and physiotherapy easily with Medsta.",
  keywords: "healthcare at home, telemedicine, doctors, patients, pharmacy delivery, diagnostics, health ecosystem, Medsta",
  openGraph: {
    title: "Medsta | Healthcare Services at Home",
    description: "Book doctor consultations, lab tests, medicines and physiotherapy easily with Medsta.",
    type: "website",
    locale: "en_US",
    siteName: "Medsta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medsta | Healthcare Services at Home",
    description: "Book doctor consultations, lab tests, medicines and physiotherapy easily with Medsta.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medsta",
    url: "https://medsta.com",
    logo: "https://medsta.com/logo.png",
    description: "Healthcare services at home with one message. Doctor consultation, lab tests, medicines and physiotherapy from trusted local providers.",
    sameAs: [
      "https://twitter.com/medsta",
      "https://linkedin.com/company/medsta"
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Added pb-16 to body to prevent content hiding behind StickyMobileBar on small screens */}
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col pb-16 md:pb-0`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
