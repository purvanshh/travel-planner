'use client';

import { motion } from 'framer-motion';
import {
    Map,
    Sparkles,
    Smartphone,
    Wallet,
    Building2,
    Shield,
    Plane,
    Check,
    User,
    Users,
    Briefcase
} from 'lucide-react';
import { ReactNode } from 'react';
import ExpandCards from '@/components/ui/expand-cards';

// Features Section
export function Features() {
    const features: { icon: ReactNode; title: string; description: string }[] = [
        {
            icon: <Map className='w-8 h-8' />,
            title: 'Smart Itineraries',
            description: 'AI-powered trip planning that adapts to your style and preferences.',
        },
        {
            icon: <Sparkles className='w-8 h-8' />,
            title: 'Local Insights',
            description: 'Discover hidden gems and authentic experiences recommended by locals.',
        },
        {
            icon: <Smartphone className='w-8 h-8' />,
            title: 'Offline Access',
            description: 'Access your plans offline and get real-time updates on the go.',
        },
        {
            icon: <Wallet className='w-8 h-8' />,
            title: 'Budget Tracking',
            description: 'Keep track of expenses and stay within your travel budget easily.',
        },
        {
            icon: <Building2 className='w-8 h-8' />,
            title: 'Booking Integration',
            description: 'Book hotels, flights, and activities all in one place.',
        },
        {
            icon: <Shield className='w-8 h-8' />,
            title: 'Secure & Private',
            description: 'Your travel plans are encrypted and stored securely.',
        },
    ];

    return (
        <section id="features" className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Everything You Need
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Plan, book, and explore with powerful features designed for modern travelers.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className='p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer transition-colors'
                        >
                            <div className='text-primary mb-4'>{feature.icon}</div>
                            <h3 className='text-xl font-semibold text-foreground mb-2'>{feature.title}</h3>
                            <p className='text-muted-foreground'>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// How It Works Section
export function HowItWorks() {
    const steps = [
        {
            step: '01',
            title: 'Tell Us Your Dream',
            description: 'Share your travel preferences, dates, and budget.',
        },
        {
            step: '02',
            title: 'Get Your Plan',
            description: 'Receive a personalized itinerary crafted just for you.',
        },
        {
            step: '03',
            title: 'Book & Go',
            description: 'Confirm your bookings and start your adventure.',
        },
    ];

    return (
        <section className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        How It Works
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Three simple steps to your perfect trip.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-3 gap-12'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className='text-center cursor-pointer p-6 rounded-2xl hover:bg-white/[0.03] transition-colors'
                        >
                            <div className='text-6xl font-bold text-primary/20 mb-4'>{step.step}</div>
                            <h3 className='text-2xl font-semibold text-foreground mb-2'>{step.title}</h3>
                            <p className='text-muted-foreground'>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Destinations Section
export function Destinations() {
    return (
        <section id="destinations" className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Popular Destinations
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Hover to explore our most loved travel destinations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ExpandCards />
                </motion.div>
            </div>
        </section>
    );
}

// Itinerary Preview Section
export function ItineraryPreview() {
    return (
        <section className='py-24'>
            <div className='container mx-auto px-6'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
                            Your Perfect Itinerary, Visualized
                        </h2>
                        <p className='text-xl text-muted-foreground mb-8'>
                            See your entire trip at a glance with our beautiful timeline view.
                            Drag and drop to customize, add notes, and share with travel companions.
                        </p>
                        <ul className='space-y-4'>
                            {['Day-by-day breakdown', 'Interactive maps', 'Real-time collaboration', 'Export to calendar'].map((item) => (
                                <li key={item} className='flex items-center gap-3 text-foreground'>
                                    <Check className='w-5 h-5 text-primary' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='relative'
                    >
                        <div className='aspect-video rounded-2xl bg-card border border-border p-6'>
                            <div className='space-y-4'>
                                {['Day 1: Arrival & City Tour', 'Day 2: Cultural Exploration', 'Day 3: Adventure Activities'].map((day, i) => (
                                    <div key={day} className='flex items-center gap-4 p-4 rounded-xl bg-muted/50'>
                                        <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold'>
                                            {i + 1}
                                        </div>
                                        <span className='text-foreground'>{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Testimonials Section
export function Testimonials() {
    const testimonials: { name: string; role: string; content: string; avatar: ReactNode }[] = [
        {
            name: 'Sarah Johnson',
            role: 'Adventure Traveler',
            content: 'TravelPlanner made my solo trip to Japan absolutely seamless. The AI suggestions were spot on!',
            avatar: <User className='w-6 h-6' />,
        },
        {
            name: 'Mike Chen',
            role: 'Family Vacationer',
            content: 'Planning a trip with kids used to be stressful. Now it takes minutes instead of hours.',
            avatar: <Users className='w-6 h-6' />,
        },
        {
            name: 'Emma Williams',
            role: 'Digital Nomad',
            content: 'The offline access feature is a game changer. Perfect for remote destinations.',
            avatar: <Briefcase className='w-6 h-6' />,
        },
    ];

    return (
        <section className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Loved by Travelers
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Join thousands of happy adventurers.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className='p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer'
                        >
                            <p className='text-muted-foreground mb-6'>&ldquo;{testimonial.content}&rdquo;</p>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary'>{testimonial.avatar}</div>
                                <div>
                                    <p className='font-semibold text-foreground'>{testimonial.name}</p>
                                    <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Pricing Section
export function Pricing() {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            description: 'Perfect for trying out',
            features: ['1 trip per month', 'Basic itinerary', 'Community support'],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$9',
            period: '/month',
            description: 'For frequent travelers',
            features: ['Unlimited trips', 'AI recommendations', 'Offline access', 'Priority support'],
            cta: 'Start Free Trial',
            popular: true,
        },
        {
            name: 'Team',
            price: '$29',
            period: '/month',
            description: 'For travel groups',
            features: ['Everything in Pro', 'Team collaboration', 'Shared budgets', 'Custom branding'],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    return (
        <section id="pricing" className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Simple Pricing
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Choose the plan that fits your travel style.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-2xl cursor-pointer ${plan.popular
                                ? 'bg-primary text-primary-foreground border-2 border-primary shadow-xl shadow-primary/20'
                                : 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10'
                                }`}
                        >
                            {plan.popular && (
                                <span className='text-sm font-medium bg-primary-foreground text-primary px-3 py-1 rounded-full'>
                                    Most Popular
                                </span>
                            )}
                            <h3 className='text-2xl font-bold mt-4'>{plan.name}</h3>
                            <div className='mt-4'>
                                <span className='text-4xl font-bold'>{plan.price}</span>
                                {plan.period && <span className='text-muted-foreground'>{plan.period}</span>}
                            </div>
                            <p className={`mt-2 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                {plan.description}
                            </p>
                            <ul className='mt-6 space-y-3'>
                                {plan.features.map((feature) => (
                                    <li key={feature} className='flex items-center gap-2'>
                                        <Check className='w-4 h-4' />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full mt-8 py-3 rounded-xl font-medium transition-all ${plan.popular
                                    ? 'bg-primary-foreground text-primary hover:shadow-lg'
                                    : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                                    }`}
                            >
                                {plan.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA Section
export function CTA() {
    return (
        <section id="contact" className='py-24'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center max-w-3xl mx-auto'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
                        Ready to Start Your Adventure?
                    </h2>
                    <p className='text-xl text-muted-foreground mb-8'>
                        Join over 50,000 travelers who plan smarter with TravelPlanner.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className='px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow'
                        >
                            Get Started Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className='px-8 py-4 bg-white/5 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-colors'
                        >
                            Watch Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Footer Section
export function Footer() {
    return (
        <footer className='py-12 bg-muted/50 border-t border-border'>
            <div className='container mx-auto px-6'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <div>
                        <div className='flex items-center gap-2 mb-4'>
                            <Plane className='w-8 h-8 text-primary' />
                            <span className='text-xl font-bold text-foreground'>TravelPlanner</span>
                        </div>
                        <p className='text-muted-foreground'>
                            Making travel planning simple and delightful.
                        </p>
                    </div>

                    <div>
                        <h4 className='font-semibold text-foreground mb-4'>Product</h4>
                        <ul className='space-y-2 text-muted-foreground'>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Features</a></li>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Pricing</a></li>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Destinations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-foreground mb-4'>Company</h4>
                        <ul className='space-y-2 text-muted-foreground'>
                            <li><a href='#' className='hover:text-foreground transition-colors'>About</a></li>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Blog</a></li>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-foreground mb-4'>Legal</h4>
                        <ul className='space-y-2 text-muted-foreground'>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Privacy</a></li>
                            <li><a href='#' className='hover:text-foreground transition-colors'>Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12 pt-8 border-t border-border text-center text-muted-foreground'>
                    <p>© 2026 TravelPlanner. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
