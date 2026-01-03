"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

// Background-only version with scroll-triggered animation
function GeometricBackground({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative w-full overflow-hidden bg-[#030712]">
            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.08] via-blue-500/[0.03] to-cyan-500/[0.08] blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/[0.05] via-transparent to-blue-400/[0.05]" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top section shapes */}
                <ElegantShape
                    delay={0.1}
                    width={700}
                    height={160}
                    rotate={12}
                    gradient="from-blue-500/[0.25]"
                    className="left-[-15%] md:left-[-8%] top-[5%]"
                />

                <ElegantShape
                    delay={0.15}
                    width={400}
                    height={100}
                    rotate={-8}
                    gradient="from-cyan-400/[0.22]"
                    className="right-[5%] md:right-[10%] top-[8%]"
                />

                <ElegantShape
                    delay={0.2}
                    width={300}
                    height={80}
                    rotate={18}
                    gradient="from-sky-500/[0.2]"
                    className="left-[30%] md:left-[35%] top-[12%]"
                />

                {/* Upper middle section */}
                <ElegantShape
                    delay={0.25}
                    width={550}
                    height={130}
                    rotate={-15}
                    gradient="from-indigo-500/[0.22]"
                    className="right-[-8%] md:right-[-3%] top-[22%]"
                />

                <ElegantShape
                    delay={0.3}
                    width={350}
                    height={90}
                    rotate={25}
                    gradient="from-blue-400/[0.2]"
                    className="left-[8%] md:left-[12%] top-[28%]"
                />

                <ElegantShape
                    delay={0.18}
                    width={250}
                    height={65}
                    rotate={-20}
                    gradient="from-cyan-500/[0.18]"
                    className="right-[25%] md:right-[30%] top-[18%]"
                />

                {/* Middle section */}
                <ElegantShape
                    delay={0.35}
                    width={600}
                    height={140}
                    rotate={10}
                    gradient="from-blue-600/[0.2]"
                    className="left-[-10%] md:left-[-5%] top-[40%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={450}
                    height={110}
                    rotate={-12}
                    gradient="from-sky-400/[0.22]"
                    className="right-[-5%] md:right-[0%] top-[45%]"
                />

                <ElegantShape
                    delay={0.32}
                    width={280}
                    height={70}
                    rotate={22}
                    gradient="from-indigo-400/[0.2]"
                    className="left-[40%] md:left-[45%] top-[38%]"
                />

                {/* Lower middle section */}
                <ElegantShape
                    delay={0.45}
                    width={500}
                    height={120}
                    rotate={-18}
                    gradient="from-blue-500/[0.22]"
                    className="left-[5%] md:left-[10%] top-[58%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={380}
                    height={95}
                    rotate={15}
                    gradient="from-cyan-500/[0.2]"
                    className="right-[10%] md:right-[15%] top-[55%]"
                />

                <ElegantShape
                    delay={0.42}
                    width={220}
                    height={55}
                    rotate={-25}
                    gradient="from-sky-500/[0.18]"
                    className="left-[55%] md:left-[60%] top-[62%]"
                />

                {/* Bottom section */}
                <ElegantShape
                    delay={0.55}
                    width={650}
                    height={150}
                    rotate={8}
                    gradient="from-indigo-500/[0.22]"
                    className="right-[-12%] md:right-[-7%] top-[72%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={420}
                    height={105}
                    rotate={-10}
                    gradient="from-blue-400/[0.2]"
                    className="left-[-5%] md:left-[0%] top-[78%]"
                />

                <ElegantShape
                    delay={0.52}
                    width={320}
                    height={80}
                    rotate={20}
                    gradient="from-cyan-400/[0.2]"
                    className="left-[35%] md:left-[40%] top-[75%]"
                />

                <ElegantShape
                    delay={0.58}
                    width={180}
                    height={45}
                    rotate={-15}
                    gradient="from-sky-400/[0.18]"
                    className="right-[30%] md:right-[35%] top-[85%]"
                />

                {/* Extra floating accents */}
                <ElegantShape
                    delay={0.65}
                    width={150}
                    height={40}
                    rotate={30}
                    gradient="from-blue-300/[0.15]"
                    className="left-[15%] top-[92%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={200}
                    height={50}
                    rotate={-30}
                    gradient="from-indigo-300/[0.15]"
                    className="right-[20%] top-[88%]"
                />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export { HeroGeometric, GeometricBackground, ElegantShape };
