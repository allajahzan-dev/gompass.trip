"use client";

import { playfair } from "@/app/fonts/playfair";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Reveal package title
export default function RevealPackageTitle() {
    return (
        <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 text-4xl font-normal
            lg:col-span-2 md:text-5xl xl:text-6xl"
        >
            Must{" "}
            <i className={cn(playfair.className, "text-[#f15b34]")}>experience</i>
            <br />
            packages
        </motion.p>
    );
}
