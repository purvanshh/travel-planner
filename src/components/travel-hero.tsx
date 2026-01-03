'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const travelContent = {
    mediaSrc: '/hero-video.mp4',
    background: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop',
    title: 'Discover Your Next Adventure',
    date: 'Travel Planner 2026',
    scrollToExpand: '↓ Scroll to Explore',
};

const TravelHeroContent = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
                Plan Your Perfect Journey
            </h2>
            <p className='text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed'>
                Whether you&apos;re dreaming of pristine beaches, ancient cities, or mountain peaks,
                our travel planner helps you craft unforgettable experiences. From itinerary
                creation to local recommendations, we&apos;ve got you covered.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-12'>
                <div className='p-6 rounded-xl bg-card border border-border'>
                    <div className='text-4xl mb-4'>🗺️</div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Smart Itineraries</h3>
                    <p className='text-muted-foreground'>
                        AI-powered trip planning that adapts to your style and preferences.
                    </p>
                </div>

                <div className='p-6 rounded-xl bg-card border border-border'>
                    <div className='text-4xl mb-4'>✨</div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Local Insights</h3>
                    <p className='text-muted-foreground'>
                        Discover hidden gems and authentic experiences recommended by locals.
                    </p>
                </div>

                <div className='p-6 rounded-xl bg-card border border-border'>
                    <div className='text-4xl mb-4'>📱</div>
                    <h3 className='text-xl font-semibold mb-2 text-foreground'>Seamless Travel</h3>
                    <p className='text-muted-foreground'>
                        Access your plans offline and get real-time updates on the go.
                    </p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity'>
                    Start Planning
                </button>
                <button className='px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold border border-border hover:bg-accent transition-colors'>
                    View Destinations
                </button>
            </div>
        </div>
    );
};

export default function TravelHero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType='video'
                mediaSrc={travelContent.mediaSrc}
                bgImageSrc={travelContent.background}
                title={travelContent.title}
                date={travelContent.date}
                scrollToExpand={travelContent.scrollToExpand}
                textBlend
            >
                <TravelHeroContent />
            </ScrollExpandMedia>
        </div>
    );
}
