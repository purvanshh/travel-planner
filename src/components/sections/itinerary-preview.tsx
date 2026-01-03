'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Utensils, Camera, Bed, Coffee } from 'lucide-react';

const days = [
  {
    day: 1,
    title: 'Arrival & Exploration',
    activities: [
      { time: '10:00', title: 'Airport Arrival', icon: MapPin, type: 'transport' },
      { time: '12:30', title: 'Hotel Check-in', icon: Bed, type: 'accommodation' },
      { time: '14:00', title: 'Local Lunch', icon: Utensils, type: 'food' },
      { time: '16:00', title: 'City Walking Tour', icon: Camera, type: 'activity' },
    ],
  },
  {
    day: 2,
    title: 'Cultural Immersion',
    activities: [
      { time: '08:00', title: 'Breakfast at Café', icon: Coffee, type: 'food' },
      { time: '10:00', title: 'Temple Visit', icon: Camera, type: 'activity' },
      { time: '13:00', title: 'Traditional Lunch', icon: Utensils, type: 'food' },
      { time: '15:00', title: 'Art Museum', icon: Camera, type: 'activity' },
    ],
  },
  {
    day: 3,
    title: 'Adventure Day',
    activities: [
      { time: '06:00', title: 'Sunrise Hike', icon: MapPin, type: 'activity' },
      { time: '09:00', title: 'Mountain Breakfast', icon: Coffee, type: 'food' },
      { time: '11:00', title: 'Waterfall Trek', icon: Camera, type: 'activity' },
      { time: '18:00', title: 'Farewell Dinner', icon: Utensils, type: 'food' },
    ],
  },
];

const typeColors: Record<string, string> = {
  transport: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  accommodation: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  food: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  activity: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function ItineraryPreview() {
  const [activeDay, setActiveDay] = useState(1);
  const currentDay = days.find((d) => d.day === activeDay) || days[0];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Itinerary <span className="text-blue-400">Builder</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Visualize your trip day by day with our interactive planner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          {/* Day selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex lg:flex-col gap-3"
          >
            {days.map((day) => (
              <motion.button
                key={day.day}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveDay(day.day)}
                className={`p-4 rounded-xl text-left transition-all ${
                  activeDay === day.day
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                    : 'bg-[#1a1a1a] text-slate-400 hover:bg-[#1e293b] border border-white/5'
                }`}
              >
                <div className="text-sm font-medium opacity-70">Day {day.day}</div>
                <div className="font-semibold truncate">{day.title}</div>
              </motion.button>
            ))}
          </motion.div>

          {/* Timeline */}
          <Card className="bg-[#1a1a1a]/50 border-white/10">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      Day {currentDay.day}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-50">{currentDay.title}</h3>
                  </div>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500/20" />

                    <div className="space-y-6">
                      {currentDay.activities.map((activity, index) => (
                        <motion.div
                          key={activity.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative flex items-start gap-4 pl-14"
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-4 w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>

                          {/* Activity card */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className={`flex-1 p-4 rounded-xl border ${typeColors[activity.type]} cursor-pointer`}
                          >
                            <div className="flex items-center gap-3">
                              <activity.icon className="w-5 h-5" />
                              <div className="flex-1">
                                <div className="font-semibold">{activity.title}</div>
                                <div className="text-sm opacity-70 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {activity.time}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
