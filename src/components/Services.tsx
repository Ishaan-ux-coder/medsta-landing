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
      <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-[#dbf4fa] via-[#eaf4ff] to-white relative">
         <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start max-w-7xl mx-auto">
               
               {/* Left Column for Text and Image */}
               <div className="w-full lg:w-5/12 text-center lg:text-left lg:sticky lg:top-32">
                  <h2 className="text-sm font-semibold text-healthcare-blue-600 uppercase tracking-widest mb-4">
                     Ecosystem
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-outfit font-bold text-foreground mb-6">
                     Everything you need. <br />
                     <span className="text-slate-400">All in one place.</span>
                  </h3>
                  <p className="text-slate-500 mb-10 leading-relaxed text-balance text-lg">
                     From doctor appointments and diagnostics tests to pharmacies, therapy, and medicine delivery— our platform brings every essential healthcare service together, making quality care easy, fast, and accessible.
                  </p>
                  
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100/50 bg-slate-100"
                  >
                     <img 
                        src="/Screenshot 2026-03-18 194529.png" 
                        alt="Medsta Ecosystem" 
                        className="w-full h-full object-cover mix-blend-multiply" 
                     />
                  </motion.div>
               </div>

               {/* Right Column for Grid of Cards */}
               <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
                  {services.map((service, i) => {
                     const Icon = service.icon;
                     return (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 0.5, delay: i * 0.1 }}
                           className={cn(
                              "group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-4 md:p-8 flex flex-row md:flex-col items-center md:items-stretch justify-between",
                              service.className
                           )}
                        >
                           <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br", service.gradient)} />

                           <div className="relative z-10 flex flex-col w-full h-full">
                              <div className="flex flex-row md:flex-col items-center justify-between md:items-start mb-0 md:mb-6 w-full gap-4">
                                 <h4 className="text-[1.35rem] md:text-2xl font-bold text-foreground font-outfit order-1 md:order-none">
                                    {service.title}
                                 </h4>
                                 <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 order-2 md:order-none", service.color)}>
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                 </div>
                              </div>
                              <p className={cn("hidden md:block text-muted-foreground text-sm leading-relaxed flex-grow", service.title === "Delivery" && "md:max-w-[60%]")}>
                                 {service.description}
                              </p>
                           </div>

                           {/* Decorative fade at bottom for large cards if needed */}
                           <div className="hidden md:block absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                              <Icon className="w-32 h-32" />
                           </div>
                        </motion.div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
