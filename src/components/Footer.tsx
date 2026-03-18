import Link from "next/link";
import { HeartPulse, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-slate-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center">
                <img src="/logo.svg" alt="MEDSTA" className="w-10 h-10 block object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                MEDSTA
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Connecting patients, doctors, pharmacies, diagnostics, and delivery directly in one seamless healthcare platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-healthcare-blue-600 hover:shadow-md transition-all">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 md:mb-6">Company</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Vision</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 md:mb-6">Legal</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-healthcare-blue-600 transition-colors">HIPAA Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Medsta Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Powered by</span>
            <span className="font-semibold text-healthcare-blue-600">Medsta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
