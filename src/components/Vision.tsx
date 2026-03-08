"use client";

import { motion } from "framer-motion";

export default function Vision() {
   return (
      <section id="vision" className="relative py-32 bg-slate-950 overflow-hidden">
         {/* Dark premium gradient backgrounds */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-healthcare-blue-900/40 via-slate-950 to-slate-950" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-healthcare-cyan-900/30 via-transparent to-transparent" />

         <div className="container relative z-10 px-4 md:px-6 mx-auto text-center max-w-4xl">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-sm font-semibold text-healthcare-cyan-400 uppercase tracking-widest mb-8">
                  Our Vision
               </h2>

               <blockquote className="text-3xl md:text-5xl lg:text-6xl font-outfit font-medium text-white leading-tight mb-12">
                  &quot;We envision a world where health tracking, diagnosis, and treatment happen fluidly across a singular, connected architecture.&quot;
               </blockquote>

               <div className="w-16 h-1 bg-healthcare-blue-500 mx-auto rounded-full mb-8" />

               <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto text-balance">
                  Medsta is building the operating system for global healthcare. Removing friction. Saving time. Improving lives.
               </p>
            </motion.div>
         </div>
      </section>
   );
}
