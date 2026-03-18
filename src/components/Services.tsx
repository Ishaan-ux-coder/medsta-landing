"use client";

import { motion } from "framer-motion";
import { User, Stethoscope, Pill, Beaker, Truck, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
   // {
   //    title: "Patients",
   //    description: "Your health records, appointments, and prescriptions in one secure place.",
   //    icon: User,
   //    color: "bg-blue-100 text-blue-600",
   //    gradient: "from-blue-50 to-transparent",
   //    className: "md:col-span-2 md:row-span-2",
   // },
   {
      title: "Doctors",
      description: "Consult experienced doctors online and manage appointments easily. Get direct guidance and personalized care.",
      icon: Stethoscope,
      color: "bg-cyan-100 text-cyan-600",
      gradient: "from-cyan-50 to-transparent",
      className: "md:col-span-1 md:row-span-1",
   },
   {
      title: "Pharmacies",
      description: "Upload your prescription and order medicines online. Fast and reliable medicine delivery to your doorstep.",
      icon: Pill,
      color: "bg-teal-100 text-teal-600",
      gradient: "from-teal-50 to-transparent",
      className: "md:col-span-1 md:row-span-1",
   },
   {
      title: "Diagnostics",
      description: "Book lab tests online in seconds. Schedule MRI scans, blood tests, and even home sample collection.",
      icon: Beaker,
      color: "bg-indigo-100 text-indigo-600",
      gradient: "from-indigo-50 to-transparent",
      className: "md:col-span-1 md:row-span-1",
   },
   {
      title: "Therapy",
      description: "Track and improve your mental and physical health with continuous therapy support and professional guidance.",
      icon: Smile,
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-50 to-transparent",
      className: "md:col-span-1 md:row-span-1",
   },
   {
      title: "Delivery",
      description: "Last-mile healthcare delivery right to the patient's door. Fast, reliable, and hassle-free.",
      icon: Truck,
      color: "bg-slate-100 text-slate-600",
      gradient: "from-slate-50 to-transparent",
      className: "md:col-span-2 md:row-span-1",
   },
];

export default function Services() {
   return (
      <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
         <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
               <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-6">
                  Everything you need. <br />
                  <span className="text-slate-400">All in one place.</span>
               </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 auto-rows-auto md:auto-rows-[250px] max-w-6xl mx-auto">
               {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                           "group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-5 md:p-8 flex flex-col justify-between",
                           service.className
                        )}
                     >
                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br", service.gradient)} />

                        <div className="relative z-10">
                           <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6", service.color)}>
                              <Icon className="w-6 h-6" />
                           </div>
                           <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-outfit">
                              {service.title}
                           </h4>
                           <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                           </p>
                        </div>

                        {/* Decorative fade at bottom for large cards if needed */}
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
                           <Icon className="w-40 h-40" />
                        </div>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
