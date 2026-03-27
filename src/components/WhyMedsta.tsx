"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Zap, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Verified Providers",
    description: "Only trusted doctors, labs and pharmacies are allowed in our network. Your health is safe with us.",
    icon: ShieldCheck,
  },
  {
    title: "Ultimate Convenience",
    description: "No hospital queues or making multiple calls to different clinics. Everything is handled from your home.",
    icon: Clock,
  },
  {
    title: "Single Contact",
    description: "One single WhatsApp message manages your entire healthcare journey, start to finish.",
    icon: MessageSquare,
  },
  {
    title: "Fast Response",
    description: "The Medsta team coordinates your requests immediately ensuring you get care when you need it most.",
    icon: Zap,
  },
];

export default function WhyMedsta() {
  return (
    <section id="why-medsta" className="py-16 md:py-24 bg-gradient-to-b from-[#e6f7ff] via-[#dcf4fa] to-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-left md:text-center max-w-2xl mx-auto md:mb-16 mb-10 pl-2">
          <h2 className="text-xs md:text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-3">
            WHY CHOOSE US
          </h2>
          <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground leading-tight md:mb-6">
            Healthcare designed<br className="md:hidden" /> around you.
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 text-blue-600 md:bg-blue-50 md:rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-[14px] md:text-xl font-bold text-slate-800 mb-2 md:mb-3 font-outfit mt-2 md:mt-12 pr-6">
                  {feature.title}
                </h4>
                <p className="text-[11px] md:text-base text-slate-500 leading-snug">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
