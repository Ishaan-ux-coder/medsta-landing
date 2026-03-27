"use client";

import { motion } from "framer-motion";
import { Search, Link as LinkIcon, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Find Your Provider",
    description: "Search for doctors, diagnostic centers, or pharmacies locally with advanced filtering.",
    icon: Search,
  },
  {
    title: "Connect & Consult",
    description: "Securely share your digital health records and get instant consultations right from home.",
    icon: LinkIcon,
  },
  {
    title: "Instant Resolution",
    description: "Get prescriptions delivered, tests booked, and continuous care managed automatically.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8faff]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center flex-wrap">
          
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-6 md:mb-8 text-balance">
              Seamless connection from start to finish.
            </h3>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
               Discover a fully integrated digital environment. Find trusted professionals, securely share records, and automatically arrange necessary follow-ups directly from your phone.
            </p>
          </div>

          <div className="w-full lg:w-6/12 flex-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex justify-center py-6 md:py-0 lg:ml-auto"
            >
              {/* Glowing background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#bfdbfe]/30 mix-blend-multiply blur-[100px] pointer-events-none" />
              
              {/* Phone Mockup Frame */}
              <div className="relative z-10 mx-auto lg:mx-0 lg:ml-auto w-full max-w-[320px] md:max-w-[340px] h-auto min-h-[580px] md:min-h-[640px] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden p-5 flex flex-col gap-4">
                <div className="w-32 h-6 md:h-7 bg-slate-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl md:rounded-b-2xl z-20" />
                
                {/* Steps inside the phone for BOTH Mobile and Desktop */}
                <div className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-14 h-full px-1">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex gap-4 md:gap-5 relative group">
                        {index !== steps.length - 1 && (
                          <div className="absolute left-[15px] md:left-[19px] top-10 md:top-12 bottom-[-20px] md:bottom-[-25px] w-px border-l-2 border-dashed border-slate-200 transition-colors group-hover:border-blue-300" />
                        )}
                        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-blue-50 group-hover:border-blue-200">
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-slate-800">{step.title}</h4>
                          <p className="text-[11px] md:text-xs text-slate-500 leading-snug mt-1">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
