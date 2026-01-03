'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Compass, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Smart Destinations',
    description: 'AI-powered recommendations based on your travel style and preferences.',
  },
  {
    icon: Calendar,
    title: 'Flexible Planning',
    description: 'Drag-and-drop itinerary builder with real-time collaboration.',
  },
  {
    icon: Compass,
    title: 'Local Experiences',
    description: 'Discover hidden gems and authentic experiences curated by locals.',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage options integrated into your booking.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book flights, hotels, and activities in one seamless experience.',
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Coordinate trips with friends and family with shared itineraries.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

export default function Features() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powerful features designed to make your travel planning effortless and enjoyable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group bg-[#1a1a1a]/50 border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
