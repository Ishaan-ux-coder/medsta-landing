"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh K.",
    review: "Booked a blood test through Medsta and the sample was collected at home entirely. Very convenient and fast results.",
    rating: 5,
    initial: "R",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Sneha P.",
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
    <section className="py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-6">
            Loved by families.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-lg text-foreground italic mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
