"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
    size?: number;
    color?: string;
    borderColor?: string;
    trailSize?: number;
    smoothing?: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
    size = 20,
    color = "rgba(255, 255, 255, 0.9)",
    borderColor = "rgba(255, 255, 255, 0.3)",
    trailSize = 40,
    smoothing = 0.15,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations for cursor
    const cursorX = useSpring(mouseX, { damping: 25, stiffness: 400 });
    const cursorY = useSpring(mouseY, { damping: 25, stiffness: 400 });

    // Slower spring for trail
    const trailX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const trailY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Detect hoverable elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.cursor-pointer');

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleElementHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleElementHover);
        };
    }, [mouseX, mouseY]);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Hide default cursor globally */}
            <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Trail circle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full mix-blend-difference"
                style={{
                    x: trailX,
                    y: trailY,
                    width: isHovering ? trailSize * 1.5 : trailSize,
                    height: isHovering ? trailSize * 1.5 : trailSize,
                    backgroundColor: 'transparent',
                    border: `2px solid ${borderColor}`,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
                }}
            />

            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10001] rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: isClicking ? size * 0.7 : isHovering ? size * 1.2 : size,
                    height: isClicking ? size * 0.7 : isHovering ? size * 1.2 : size,
                    backgroundColor: color,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.15s ease, height 0.15s ease, opacity 0.3s ease',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
            />
        </>
    );
};

export default CustomCursor;
