import Link from "next/link";
import { HeartPulse, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white md:bg-slate-50 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-slate-200">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Mobile View: Logo centered on top, then 3 column grid */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 mb-10 md:mb-16">
          
          {/* Logo, Description, Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[35%]">
            <Link href="/" className="flex flex-col md:flex-row items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center">
                <img src="/logo.svg" alt="MEDSTA" className="w-12 h-12 block object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                MEDSTA
              </span>
            </Link>
            <p className="text-slate-500 text-[13px] md:text-sm mb-6 leading-relaxed max-w-[280px] md:max-w-none">
              Connecting patients, doctors, pharmacies, diagnostics, and delivery directly in one seamless healthcare ecosystem.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Twitter className="w-[18px] h-[18px]" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Linkedin className="w-[18px] h-[18px]" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Github className="w-[18px] h-[18px]" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* 3 Column Links Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full md:w-[65%] text-center md:text-left pt-6 md:pt-0">
            <div>
              <h3 className="font-semibold text-slate-800 text-[13px] md:text-base mb-4 md:mb-6">Ecosystem</h3>
              <ul className="space-y-4 md:space-y-4">
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">For Patients</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">For Doctors</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">Pharmacies</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">Diagnostics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 text-[13px] md:text-base mb-4 md:mb-6">Company</h3>
              <ul className="space-y-4 md:space-y-4">
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">Vision</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 text-[13px] md:text-base mb-4 md:mb-6">Legal</h3>
              <ul className="space-y-4 md:space-y-4">
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors line-clamp-1">Terms of Service</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors line-clamp-1">Privacy Policy</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors line-clamp-1">Cookie Policy</Link></li>
                <li><Link href="#" className="text-[12px] md:text-sm text-slate-500 hover:text-healthcare-blue-600 transition-colors line-clamp-1">HIPAA Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] md:text-sm text-slate-400 text-center">
            &copy; {currentYear} Medsta Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[12px] md:text-sm text-slate-400">
            <span>Powered by</span>
            <span className="font-medium text-healthcare-blue-600">Medsta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
