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
    title: "Fast Response",
    description: "The Medsta team coordinates your requests immediately ensuring you get care when you need it most.",
    icon: Zap,
  },
  {
    title: "Single Contact",
    description: "One single WhatsApp message manages your entire healthcare journey, start to finish.",
    icon: MessageSquare,
  },
];

export default function WhyMedsta() {
  return (
    <section id="why-medsta" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-6">
            Healthcare designed around you.
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-healthcare-blue-50 text-healthcare-blue-600 flex items-center justify-center mb-4 md:mb-6">
                  <Icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h4 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-3 font-outfit">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
