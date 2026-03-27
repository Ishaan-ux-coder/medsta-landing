"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    review: "Booked a blood test through Medsta and the sample was collected at home entirely. Very convenient and fast results.",
    rating: 5,
    initial: "R",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Srishti P.",
    review: "I didn't have to wait in clinic queues anymore. The doctor consultation was seamless and medicines arrived in hours.",
    rating: 5,
    initial: "S",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Amit V.",
    review: "One WhatsApp message and everything was arranged for my father's physiotherapy. Unbelievable service.",
    rating: 5,
    initial: "A",
    color: "bg-blue-100 text-blue-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-3 md:mb-4">
            TESTIMONIALS
          </h2>
          <h3 className="text-[1.75rem] md:text-5xl font-outfit font-bold text-foreground mb-6">
            Loved by families.
          </h3>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f8faff] rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col"
            >
              {/* Header: Avatar, Name, Rating */}
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${testimonial.color}`}>
                  {testimonial.initial}
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">{testimonial.name}</h4>
                    <p className="text-[10px] md:text-xs text-slate-400">Verified Patient</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 md:mt-0">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[13px] md:text-lg text-slate-600 mb-2 leading-relaxed font-medium">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
