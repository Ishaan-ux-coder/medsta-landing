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
    title: "Connect & Share",
    description: "Securely share your digital health records and get instant consultations.",
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
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-8">
              Seamless connection from start to finish.
            </h3>
            
            <div className="space-y-12 mt-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex gap-6 relative"
                  >
                    {/* Line connector */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-40px] w-px bg-slate-200" />
                    )}
                    
                    <div className="relative z-10 w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-healthcare-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-healthcare-blue-50 rounded-[2rem] p-8 md:p-12 border border-healthcare-blue-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-glass-gradient pointer-events-none" />
              
              {/* Abstract Mobile Phone Mockup */}
              <div className="relative mx-auto w-full max-w-[300px] h-[600px] bg-white rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden p-4 flex flex-col gap-4">
                <div className="w-32 h-6 bg-slate-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />
                
                {/* Interface mockup */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-healthcare-blue-100" />
                  <div className="space-y-2 flex-grow">
                    <div className="w-24 h-3 bg-slate-200 rounded-full" />
                    <div className="w-16 h-2 bg-slate-100 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="h-24 bg-slate-50 rounded-2xl flex flex-col justify-end p-3">
                     <div className="w-8 h-8 rounded-full bg-healthcare-blue-100 mb-2" />
                     <div className="w-16 h-2 bg-slate-200 rounded-full" />
                  </div>
                  <div className="h-24 bg-slate-50 rounded-2xl flex flex-col justify-end p-3">
                     <div className="w-8 h-8 rounded-full bg-healthcare-cyan-100 mb-2" />
                     <div className="w-16 h-2 bg-slate-200 rounded-full" />
                  </div>
                </div>

                <div className="flex-grow mt-6 bg-slate-50 rounded-2xl p-4 space-y-4">
                  <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-3 gap-3">
                     <div className="w-6 h-6 rounded-full bg-green-100" />
                     <div className="w-20 h-2 bg-slate-200 rounded-full" />
                  </div>
                  <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-3 gap-3">
                     <div className="w-6 h-6 rounded-full bg-blue-100" />
                     <div className="w-24 h-2 bg-slate-200 rounded-full" />
                  </div>
                  <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-3 gap-3">
                     <div className="w-6 h-6 rounded-full bg-orange-100" />
                     <div className="w-16 h-2 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
