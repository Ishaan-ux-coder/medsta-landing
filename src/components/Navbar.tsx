"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Coverage", href: "#coverage" },
    { name: "Why Medsta", href: "#why-medsta" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "glass-card py-3 md:py-3 border-white/20"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-2 md:px-6 pl-4 flex items-center justify-between w-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0 mr-1 md:mr-4">
          <div className="hidden md:flex items-center justify-center mr-2">
            <img src="/logo.svg" alt="MEDSTA" className="w-10 h-10 block object-contain" />
          </div>
          <span className="text-[13px] md:text-2xl font-bold tracking-tight text-foreground transition-colors mt-0.5">
            MEDSTA
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center justify-end w-full pr-1 md:pr-0">
          <div className="flex items-center justify-end gap-[5px] sm:gap-4 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[8.5px] sm:text-xs md:text-sm font-semibold text-slate-600 hover:text-healthcare-blue-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 ml-8">
            <a
              href="tel:+918354070437"
              className="p-2.5 rounded-full text-foreground hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918354070437"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full shadow-soft hover:shadow-glass transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" />
              WhatsApp Us
            </a>
          </div>
        </nav>

      </div>
    </header>
  );
}
