'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
        <section id="features" className='py-24 bg-background'>
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors'
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
        <section className='py-24 bg-muted/30'>
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
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className='text-center'
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
    const destinations = [
        {
            name: 'Santorini, Greece',
            image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop',
            price: 'From $1,299',
        },
        {
            name: 'Kyoto, Japan',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
            price: 'From $1,599',
        },
        {
            name: 'Bali, Indonesia',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
            price: 'From $899',
        },
        {
            name: 'Swiss Alps',
            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop',
            price: 'From $1,899',
        },
    ];

    return (
        <section id="destinations" className='py-24 bg-background'>
            <div className='container mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Popular Destinations
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Explore our most loved travel destinations.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='group relative rounded-2xl overflow-hidden cursor-pointer'
                        >
                            <div className='aspect-[3/4] relative'>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                                <div className='absolute bottom-0 left-0 right-0 p-6'>
                                    <h3 className='text-xl font-semibold text-white mb-1'>{dest.name}</h3>
                                    <p className='text-blue-200'>{dest.price}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Itinerary Preview Section
export function ItineraryPreview() {
    return (
        <section className='py-24 bg-muted/30'>
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
        <section className='py-24 bg-background'>
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='p-8 rounded-2xl bg-card border border-border'
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
        <section id="pricing" className='py-24 bg-muted/30'>
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-2xl ${plan.popular
                                ? 'bg-primary text-primary-foreground border-2 border-primary'
                                : 'bg-card border border-border'
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
                            <button
                                className={`w-full mt-8 py-3 rounded-xl font-medium transition-opacity hover:opacity-90 ${plan.popular
                                    ? 'bg-primary-foreground text-primary'
                                    : 'bg-primary text-primary-foreground'
                                    }`}
                            >
                                {plan.cta}
                            </button>
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
        <section id="contact" className='py-24 bg-background'>
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
                        <button className='px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity'>
                            Get Started Free
                        </button>
                        <button className='px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold border border-border hover:bg-accent transition-colors'>
                            Watch Demo
                        </button>
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
