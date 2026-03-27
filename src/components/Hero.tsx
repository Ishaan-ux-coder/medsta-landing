"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

const fadeIn: any = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
   }
};

const staggerContainer: any = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2
      }
   }
};

export default function Hero() {
   return (
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-hero-gradient">
         {/* Background Decorative Elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-healthcare-blue-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
         <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-healthcare-cyan-200/30 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

         <div className="container relative z-10 px-4 md:px-6 mx-auto">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               animate="visible"
               className="max-w-4xl mx-auto text-center"
            >
               {/* Headline */}
               <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-7xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 md:mb-8 font-outfit"
                  style={{ lineHeight: 1.1 }}
               >
                  Delivering Health<br />
                  <span className="text-gradient">at One Message</span>
               </motion.h1>

               {/* Subheadline */}
               <motion.p
                  variants={fadeIn}
                  className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
               >
                  Doctor consultation, lab tests, medicines and physiotherapy from trusted local providers. All arranged for you by Medsta.
               </motion.p>

               {/* CTAs */}
               <motion.div
                  variants={fadeIn}
                  className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-20 w-full"
               >
                  <a
                     href="tel:+918354070437"
                     className="flex-1 sm:flex-none px-3 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-healthcare-blue-700 border border-slate-200 rounded-full font-bold text-sm sm:text-lg inline-flex items-center justify-center gap-2 sm:gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                     <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                     Call Now
                  </a>
                  <a
                     href="https://wa.me/918354070437"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 sm:flex-none px-3 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm sm:text-lg inline-flex items-center justify-center gap-2 sm:gap-3 shadow-soft hover:shadow-glass hover:-translate-y-1 transition-all duration-300"
                  >
                     <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" />
                     Get started
                  </a>
               </motion.div>

               {/* Trust Strip */}
               <motion.div
                  variants={fadeIn}
                  className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-x-2 sm:gap-x-8 gap-y-3 sm:gap-y-4 pt-6 md:pt-10 border-t border-white/50"
               >
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                     <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-blue-500 shrink-0" />
                     <span className="leading-tight">Trusted Local Providers</span>
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                     <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-blue-500 shrink-0" />
                     <span className="leading-tight">Fast Home Service</span>
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                     <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-cyan-500 shrink-0" />
                     <span className="leading-tight">Verified Labs & Pharmacies</span>
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm">
                     <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-cyan-500 shrink-0" />
                     <span className="leading-tight">Easy Booking</span>
                  </div>
               </motion.div>

            </motion.div>
         </div>
      </section>
   );
}

