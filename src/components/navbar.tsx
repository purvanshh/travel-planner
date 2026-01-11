'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Explore', href: '#explore', id: 'explore' },
    { name: 'Destinations', href: '#destinations', id: 'destinations' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);

        // Use a smaller offset for more accurate section detection
        const scrollPosition = window.scrollY + 150;

        // Find the current section by checking which section's top is closest to scroll position
        const sections = navLinks.map(link => link.id);
        let currentSection = 'home';

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    currentSection = sectionId;
                    break;
                }
            }
        }

        // If at very top, set home as active
        if (window.scrollY < 100) {
            currentSection = 'home';
        }

        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run once on mount to set initial state
        requestAnimationFrame(() => handleScroll());
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80;
            const targetPosition = section.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-300 ${isScrolled
                ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className='container mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center gap-2 group transition-transform duration-300 hover:scale-105'
                    >
                        <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Plane className='w-6 h-6 text-primary' />
                        </motion.div>
                        <span className='text-xl font-bold text-white'>
                            TravelPlanner
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${activeSection === link.id
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className='hidden md:flex items-center gap-4'>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className='px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow'
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='md:hidden p-2 text-white'
                    >
                        {isMobileMenuOpen ? (
                            <X className='w-6 h-6' />
                        ) : (
                            <Menu className='w-6 h-6' />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className='md:hidden mt-4 pb-4'
                        >
                            <div className='flex flex-col gap-2'>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.id)}
                                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${activeSection === link.id
                                            ? 'bg-white/10 text-white border border-white/20'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className='mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium w-full'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
