"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Staggered text reveal animation
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="mr-2">
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Character by character reveal
export const CharacterReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {characters.map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Fade up on scroll
interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeUp = ({ children, delay = 0, duration = 0.6, className = "" }: FadeUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Stagger children animation
interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    staggerDelay?: number;
    className?: string;
}

export const StaggerContainer = ({
    children,
    delay = 0,
    staggerDelay = 0.1,
    className = ""
}: StaggerContainerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
};

// Floating animation
interface FloatingProps {
    children: React.ReactNode;
    duration?: number;
    distance?: number;
    className?: string;
}

export const Floating = ({ children, duration = 3, distance = 10, className = "" }: FloatingProps) => {
    return (
        <motion.div
            animate={{
                y: [-distance, distance, -distance],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Pulse animation
export const Pulse = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Slide in from direction
interface SlideInProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
}

export const SlideIn = ({
    children,
    direction = "left",
    delay = 0,
    duration = 0.6,
    className = ""
}: SlideInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: 100 },
        down: { x: 0, y: -100 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directions[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
            transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Scale up on scroll
export const ScaleUp = ({ children, delay = 0, className = "" }: FadeUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Rotate in animation
export const RotateIn = ({ children, delay = 0, className = "" }: FadeUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Blur in animation
export const BlurIn = ({ children, delay = 0, className = "" }: FadeUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
