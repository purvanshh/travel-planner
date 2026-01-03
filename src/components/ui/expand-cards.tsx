"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

interface Destination {
    name: string;
    country: string;
    image: string;
    price: string;
}

const destinations: Destination[] = [
    {
        name: "Santorini",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
        price: "From $1,299",
    },
    {
        name: "Kyoto",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
        price: "From $1,599",
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        price: "From $899",
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
        price: "From $1,899",
    },
    {
        name: "Maldives",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        price: "From $2,199",
    },
    {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        price: "From $1,099",
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        price: "From $1,399",
    },
];

interface ExpandCardsProps {
    items?: Destination[];
}

const ExpandCards = ({ items = destinations }: ExpandCardsProps) => {
    const [expandedIndex, setExpandedIndex] = useState(2);

    const getCardWidth = (index: number) =>
        index === expandedIndex ? "20rem" : "4rem";

    return (
        <div className="w-full py-8">
            <div className="flex w-full items-center justify-center gap-2">
                {items.map((dest, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out group"
                        style={{
                            width: getCardWidth(idx),
                            height: "22rem",
                        }}
                        onMouseEnter={() => setExpandedIndex(idx)}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={dest.image}
                            alt={dest.name}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Content - only visible when expanded */}
                        <div
                            className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-500 ${idx === expandedIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className="flex items-center gap-1 text-blue-300 text-sm mb-1">
                                <MapPin className="w-3 h-3" />
                                <span>{dest.country}</span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-1">{dest.name}</h3>
                            <p className="text-blue-200 text-sm font-medium">{dest.price}</p>
                        </div>

                        {/* Vertical text for collapsed cards */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${idx === expandedIndex ? 'opacity-0' : 'opacity-100'
                                }`}
                        >
                            <span
                                className="text-white font-bold text-sm whitespace-nowrap"
                                style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'mixed',
                                    transform: 'rotate(180deg)'
                                }}
                            >
                                {dest.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpandCards;
