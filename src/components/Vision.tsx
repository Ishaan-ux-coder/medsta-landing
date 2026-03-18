"use client";

import { motion } from "framer-motion";

export default function Vision() {
   return (
      <section id="vision" className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-transparent overflow-hidden">
         <div className="container relative z-10 px-4 md:px-6 mx-auto text-center max-w-4xl">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-widest mb-6 md:mb-8 drop-shadow-sm">
                  Our Vision
               </h2>

               <blockquote className="text-2xl md:text-5xl lg:text-6xl font-outfit font-medium text-white leading-tight mb-8 md:mb-12 drop-shadow-lg drop-shadow-black/50">
                  &quot;We envision a world where health tracking, diagnosis, and treatment happen fluidly across a singular, connected architecture.&quot;
               </blockquote>

               <div className="w-full max-w-3xl h-[2px] bg-slate-800/80 mx-auto mb-6 md:mb-8" />

               <p className="text-white text-base md:text-xl max-w-2xl mx-auto text-balance drop-shadow-md font-medium">
                  Medsta is building the operating system for global healthcare. Removing friction. Saving time. Improving lives.
               </p>
            </motion.div>
         </div>
      </section>
   );
}
