"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "100+", label: "Doctors" },
  { value: "20+", label: "Verified Labs" },
  { value: "50+", label: "Pharmacies" },
];

export default function Trust() {
  return (
    <section className="py-20 border-y border-slate-100 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">

          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-outfit font-bold text-foreground mb-4">
              Trusted by leading healthcare institutions worldwide.
            </h3>
            <p className="text-muted-foreground">
              Our infrastructure powers thousands of clinics, pharmacies, and hospitals.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-black text-healthcare-blue-600 mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
