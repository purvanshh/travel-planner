'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for casual travelers',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Up to 3 trips per year',
      'Basic itinerary builder',
      'Community recommendations',
      'Mobile app access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For frequent adventurers',
    monthlyPrice: 12,
    yearlyPrice: 99,
    features: [
      'Unlimited trips',
      'AI-powered suggestions',
      'Offline access',
      'Real-time collaboration',
      'Priority support',
      'Travel insurance discounts',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For travel agencies & teams',
    monthlyPrice: 49,
    yearlyPrice: 399,
    features: [
      'Everything in Pro',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Advanced analytics',
      'SSO & team management',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

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
            Simple <span className="text-blue-400">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that fits your travel style. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-[#1a1a1a] border border-white/10"
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 4 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              />
            </motion.button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yearly <Badge className="ml-1 bg-green-500/20 text-green-400 border-green-500/30">Save 30%</Badge>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={`relative h-full bg-[#1a1a1a]/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-violet-500 border-violet-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 text-white border-0 px-4">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-50 mb-1">{plan.name}</h3>
                    <p className="text-sm text-slate-400">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-50">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-500">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white'
                        : 'bg-[#1e293b] hover:bg-[#2d3a4f] text-slate-50'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
