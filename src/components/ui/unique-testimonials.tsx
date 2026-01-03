"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        id: 1,
        quote: "This app completely transformed how I plan my trips. The AI recommendations are spot on!",
        author: "Sarah Chen",
        role: "Digital Nomad",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 2,
        quote: "Simply brilliant. The itinerary builder saved me hours of research. Highly recommended!",
        author: "Marcus Johnson",
        role: "Adventure Traveler",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 3,
        quote: "The attention to detail is unmatched. Found hidden gems I never would have discovered!",
        author: "Elena Rodriguez",
        role: "Travel Blogger",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 4,
        quote: "Planning family vacations used to be stressful. Now it's actually enjoyable!",
        author: "David Kim",
        role: "Family Vacationer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 5,
        quote: "The offline access feature is a game changer for remote destinations. Love it!",
        author: "Priya Sharma",
        role: "Solo Explorer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 6,
        quote: "Best travel planning tool I've ever used. Worth every penny of the subscription!",
        author: "James Wilson",
        role: "Business Traveler",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
]

export function UniqueTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
    const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleSelect = (index: number) => {
        if (index === activeIndex || isAnimating) return
        setIsAnimating(true)

        setTimeout(() => {
            setDisplayedQuote(testimonials[index].quote)
            setDisplayedRole(testimonials[index].role)
            setActiveIndex(index)
            setTimeout(() => setIsAnimating(false), 400)
        }, 200)
    }

    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Travelers Say
                    </h2>
                    <p className="text-xl text-white/60">
                        Join thousands of happy adventurers
                    </p>
                </div>

                <div className="flex flex-col items-center gap-10 py-8">
                    {/* Quote Container */}
                    <div className="relative px-8 max-w-2xl mx-auto">
                        <span className="absolute -left-4 -top-6 text-8xl font-serif text-white/[0.08] select-none pointer-events-none">
                            "
                        </span>

                        <p
                            className={cn(
                                "text-2xl md:text-3xl font-light text-white text-center leading-relaxed transition-all duration-400 ease-out",
                                isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
                            )}
                        >
                            {displayedQuote}
                        </p>

                        <span className="absolute -right-4 -bottom-8 text-8xl font-serif text-white/[0.08] select-none pointer-events-none">
                            "
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-6 mt-4">
                        {/* Role text */}
                        <p
                            className={cn(
                                "text-xs text-white/50 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
                                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
                            )}
                        >
                            {displayedRole}
                        </p>

                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            {testimonials.map((testimonial, index) => {
                                const isActive = activeIndex === index
                                const isHovered = hoveredIndex === index && !isActive
                                const showName = isActive || isHovered

                                return (
                                    <button
                                        key={testimonial.id}
                                        onClick={() => handleSelect(index)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={cn(
                                            "relative flex items-center gap-0 rounded-full cursor-pointer",
                                            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                            isActive ? "bg-white shadow-lg shadow-white/20" : "bg-transparent hover:bg-white/10",
                                            showName ? "pr-4 pl-2 py-2" : "p-1",
                                        )}
                                    >
                                        {/* Avatar with smooth ring animation */}
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className={cn(
                                                    "w-10 h-10 rounded-full object-cover",
                                                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                                    isActive ? "ring-2 ring-primary/50" : "ring-2 ring-white/20",
                                                    !isActive && "hover:scale-110",
                                                )}
                                            />
                                        </div>

                                        <div
                                            className={cn(
                                                "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                                showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                                            )}
                                        >
                                            <div className="overflow-hidden">
                                                <span
                                                    className={cn(
                                                        "text-sm font-medium whitespace-nowrap block",
                                                        "transition-colors duration-300",
                                                        isActive ? "text-gray-900" : "text-white",
                                                    )}
                                                >
                                                    {testimonial.author}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UniqueTestimonials
