"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Why Medsta", href: "#why-medsta" },
    { name: "Coverage", href: "#coverage" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "glass-card py-3 border-white/20"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="MEDSTA" className="w-10 h-10 block object-contain" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-healthcare-blue-600 transition-colors">
            MEDSTA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-healthcare-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-b border-white/20 py-4 px-4 flex flex-col gap-2 shadow-glass">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground p-3 hover:bg-white/50 rounded-lg transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Omit WhatsApp/Call on mobile menu since StickyMobileBar handles it perfectly */}
        </div>
      )}
    </header>
  );
}
