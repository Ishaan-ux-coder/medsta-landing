"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center bg-white border-t border-slate-200 shadow-[0_-8px_16px_rgba(0,0,0,0.05)] h-16">
      <a
        href="https://wa.me/918354070437"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 h-full bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-colors active:scale-95"
      >
        <MessageCircle className="w-5 h-5" fill="currentColor" />
        WhatsApp
      </a>
      <div className="w-[1px] h-full bg-white/20" />
      <a
        href="tel:+918354070437"
        className="flex-1 flex items-center justify-center gap-2 h-full bg-healthcare-blue-600 text-white font-semibold text-lg hover:bg-healthcare-blue-700 transition-colors active:scale-95"
      >
        <Phone className="w-5 h-5" />
        Call Us
      </a>
    </div>
  );
}
