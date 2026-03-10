"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
              About Medsta
            </h2>
            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground leading-tight mb-6 md:mb-8">
              A deeply integrated <br className="hidden md:block" />
              <span className="text-slate-400">digital healthcare</span> environment.
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground text-balance">
              <p>
                Healthcare has always been fragmented. Patients struggle to communicate with doctors, pharmacies lose context, and diagnostics are delayed by siloed systems.
              </p>
              <p>
                Medsta was built to change that. We are not just an app; we are an infrastructure layer that seamlessly ties together every stakeholder in the health journey into a single unified platform.
              </p>
            </div>
          </motion.div>

          {/* Right: Abstract Graphic / Glass Panels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[320px] md:h-[500px] w-full bg-slate-50 flex items-center justify-center rounded-2xl md:rounded-3xl border border-slate-100 p-6 md:p-8 overflow-hidden group"
          >
            {/* Ambient gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-healthcare-blue-200 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-healthcare-cyan-200 rounded-full blur-[60px] group-hover:translate-x-10 transition-transform duration-700" />

            {/* Floating UI Elements abstraction */}
            <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card bg-white/70 p-6 rounded-2xl shadow-soft"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">DR</div>
                  <div>
                    <div className="h-4 w-24 bg-slate-200 rounded-full mb-2" />
                    <div className="h-3 w-16 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full mb-2" />
                <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card bg-white/60 p-5 rounded-2xl shadow-sm ml-12"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-xs font-bold">RX</div>
                  <div>
                    <div className="h-3 w-20 bg-slate-200 rounded-full mb-2" />
                    <div className="h-2 w-12 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
