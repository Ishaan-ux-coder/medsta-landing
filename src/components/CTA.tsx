"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
   return (
      <section id="join" className="py-24 bg-white relative overflow-hidden">
         <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-gradient-to-br from-healthcare-blue-600 to-healthcare-cyan-500 rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
            >
               {/* Decorative circles */}
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
               <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6 tracking-tight">
                     Ready to simplify healthcare?
                  </h2>
                  <p className="text-lg md:text-xl text-blue-50 mb-10 text-balance">
                     Join Medsta today. Whether you&apos;re a patient seeking better care or a provider wanting seamless operations.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Link
                        href="#"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-healthcare-blue-700 hover:bg-slate-50 rounded-full font-bold text-lg inline-flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300"
                     >
                        Create Account
                     </Link>
                     <Link
                        href="#"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-medium text-lg inline-flex items-center justify-center gap-2 transition-all duration-300"
                     >
                        Contact Sales <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
