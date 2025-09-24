"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    id: number;
    children: ReactNode;
}

// Animate services
export default function AnimateServices({ id, children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: id % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.2 + id * 0.1 }}
        >
            {children}
        </motion.div>
    );
}
