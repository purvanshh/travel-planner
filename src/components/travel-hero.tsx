'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Map, Sparkles, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

const travelContent = {
    mediaSrc: '/hero-video.mp4',
    background: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop',
    title: 'Discover Your Next Adventure',
};

const TravelHeroContent = () => {
    return (
        <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'>
                Plan Your Perfect Journey
            </h2>
            <p className='text-lg md:text-xl mb-8 text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'>
                Whether you&apos;re dreaming of pristine beaches, ancient cities, or mountain peaks,
                our travel planner helps you craft unforgettable experiences. From itinerary
                creation to local recommendations, we&apos;ve got you covered.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-12'>
                <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className='p-6 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer'
                >
                    <div className='text-primary mb-4'><Map className='w-8 h-8' /></div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Smart Itineraries</h3>
                    <p className='text-muted-foreground'>
                        AI-powered trip planning that adapts to your style and preferences.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className='p-6 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer'
                >
                    <div className='text-primary mb-4'><Sparkles className='w-8 h-8' /></div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Local Insights</h3>
                    <p className='text-muted-foreground'>
                        Discover hidden gems and authentic experiences recommended by locals.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className='p-6 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer'
                >
                    <div className='text-primary mb-4'><Smartphone className='w-8 h-8' /></div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Seamless Travel</h3>
                    <p className='text-muted-foreground'>
                        Access your plans offline and get real-time updates on the go.
                    </p>
                </motion.div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <InteractiveHoverButton 
                    text="Start Planning" 
                    className="w-44 py-4 bg-primary border-primary/50"
                />
                <InteractiveHoverButton 
                    text="Destinations" 
                    className="w-44 py-4 bg-white/5 border-white/20"
                />
            </div>
        </div>
    );
};

export default function TravelHero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="home" className='min-h-screen'>
            <ScrollExpandMedia
                mediaType='video'
                mediaSrc={travelContent.mediaSrc}
                bgImageSrc={travelContent.background}
                title={travelContent.title}
                textBlend
            >
                <TravelHeroContent />
            </ScrollExpandMedia>
        </div>
    );
}
