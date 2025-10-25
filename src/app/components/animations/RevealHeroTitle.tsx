"use client";

import { playfair } from "@/fonts/playfair";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Reveal hero title
export default function RevealHeroTitle() {
    return (
        <div
            className="text-center relative -top-14
            md:top-0"
        >
            <h1
                className="text-[34px] font-normal leading-[1] mb-4 
             md:text-[64px] xl:text-[80px]"
            >
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Embark on{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>journeys</i>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    not <i className={cn(playfair.className, "text-[#f15b34]")}>just</i>{" "}
                    destinations
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    with{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>our trips.</i>
                </motion.p>
            </h1>
        </div>
    );
}
