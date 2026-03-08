"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-healthcare-blue-900/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-800/50 border border-slate-700/50 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl max-w-5xl mx-auto shadow-2xl">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4">
              Local network. <br className="hidden md:block" />
              Real providers.
            </h3>
            <p className="text-slate-400 text-lg mb-0 text-balance">
              We aggregate only the best verified local healthcare providers in your city to guarantee fast, reliable care.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-slate-900 border border-slate-700 p-3 pr-8 rounded-full flex items-center gap-4 shadow-xl relative inline-flex"
            >
              {/* Ping animation effect */}
              <div className="absolute left-[15px] top-[15px] w-5 h-5 bg-healthcare-blue-500 rounded-full animate-ping opacity-75" />
              
              <div className="relative w-12 h-12 bg-gradient-to-br from-healthcare-blue-500 to-healthcare-cyan-400 rounded-full flex items-center justify-center shadow-inner z-10">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">Currently Serving</div>
                <div className="text-xl font-bold text-white font-outfit">Lucknow</div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
