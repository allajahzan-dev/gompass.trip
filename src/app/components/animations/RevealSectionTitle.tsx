"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { ReactNode } from "react";

// Interface for Props
interface Props extends MotionProps {
    children: ReactNode;
    className?: string;
}

// Reveal sectoin title
export default function RevealSectionTitle({
    children,
    className,
    ...motionProps
}: Props) {
    return (
        <motion.p
            {...motionProps}
            className={cn(
                "text-4xl font-normal",
                "md:text-5xl xl:text-6xl",
                className
            )}
        >
            {children}
        </motion.p>
    );
}
