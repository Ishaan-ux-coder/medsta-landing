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
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-hero-gradient">
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
                  className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8 font-outfit"
                  style={{ lineHeight: 1.1 }}
               >
                  Delivering Health<br />
                  <span className="text-gradient">at One Message</span>
               </motion.h1>

               {/* Subheadline */}
               <motion.p
                  variants={fadeIn}
                  className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
               >
                  Doctor consultation, lab tests, medicines and physiotherapy from trusted local providers. All arranged for you by Medsta.
               </motion.p>

               {/* CTAs */}
               <motion.div
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
               >
                  <a
                     href="https://wa.me/918354070437"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 shadow-soft hover:shadow-glass hover:-translate-y-1 transition-all duration-300"
                  >
                     <MessageCircle className="w-6 h-6" fill="currentColor" />
                     Get started
                  </a>
                  <a
                     href="tel:+918354070437"
                     className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-healthcare-blue-700 border border-slate-200 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                     <Phone className="w-6 h-6" />
                     Call Now
                  </a>
               </motion.div>

               {/* Trust Strip */}
               <motion.div
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 border-t border-white/50"
               >
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                     <CheckCircle2 className="w-5 h-5 text-healthcare-blue-500" />
                     Trusted Local Providers
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                     <CheckCircle2 className="w-5 h-5 text-healthcare-blue-500" />
                     Fast Home Service
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                     <CheckCircle2 className="w-5 h-5 text-healthcare-cyan-500" />
                     Verified Labs & Pharmacies
                  </div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                     <CheckCircle2 className="w-5 h-5 text-healthcare-cyan-500" />
                     Easy Booking
                  </div>
               </motion.div>

            </motion.div>
         </div>
      </section>
   );
}

