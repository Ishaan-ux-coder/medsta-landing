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
              ABOUT MEDSTA
            </h2>
            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground leading-tight mb-6 md:mb-8">
              A deeply integrated <br className="hidden md:block" />
              <span className="text-slate-400">digital healthcare</span> <br className="hidden md:block" />
              environment.
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

          {/* Right: Graphic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center overflow-hidden"
          >
            <img 
               src="/Screenshot 2026-03-18 192644.png" 
               alt="Medsta Healthcare Environment" 
               className="w-full h-full object-contain mix-blend-multiply"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
