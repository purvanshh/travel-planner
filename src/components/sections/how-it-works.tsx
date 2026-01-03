'use client';

import { motion } from 'framer-motion';
import { Search, CalendarCheck, Plane } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description: 'Browse destinations and get personalized recommendations based on your interests.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Plan',
    description: 'Build your perfect itinerary with our drag-and-drop planner and AI suggestions.',
  },
  {
    icon: Plane,
    step: '03',
    title: 'Travel',
    description: 'Book everything in one place and access your plans offline during your trip.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 80 },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            How It <span className="text-blue-400">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Plan your dream trip in three simple steps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-violet-500/40 to-blue-500/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#111111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full text-sm font-bold text-white">
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 mx-auto mt-4 mb-6 rounded-2xl bg-[#1e293b] flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"
                  >
                    <step.icon className="w-10 h-10 text-blue-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-50 mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-blue-500/50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
