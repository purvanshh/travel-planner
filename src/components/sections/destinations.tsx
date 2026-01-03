'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure'];

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 1299,
    description: 'Tropical paradise with stunning temples',
  },
  {
    id: 2,
    name: 'Swiss Alps',
    category: 'Mountain',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 2499,
    description: 'Majestic peaks and scenic railways',
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 1899,
    description: 'Where tradition meets innovation',
  },
  {
    id: 4,
    name: 'Maldives',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
    rating: 5.0,
    price: 3299,
    description: 'Crystal clear waters and overwater villas',
  },
  {
    id: 5,
    name: 'Patagonia',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 2199,
    description: 'Untamed wilderness at the end of the world',
  },
  {
    id: 6,
    name: 'Paris, France',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 1599,
    description: 'The city of lights and romance',
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
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
  exit: { scale: 0.9, opacity: 0 },
};

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDestinations = activeCategory === 'All'
    ? destinations
    : destinations.filter((d) => d.category === activeCategory);

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Popular <span className="text-violet-400">Destinations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Explore our handpicked destinations loved by travelers worldwide.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                    : 'bg-[#1a1a1a] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                variants={itemVariants}
                layout
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-violet-500/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-0">
                    {destination.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-50 group-hover:text-violet-400 transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      ${destination.price}
                    </span>
                    <span className="text-slate-500 text-sm">per person</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
