"use client";

import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

// Process section
export default function ProcessSection() {
    return (
        <section
            className="min-h-screen px-5 py-16 bg-white flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24 lg:gap-3"
        >
            {/* Heading */}
            <div
                className="grid grid-cols-1 gap-10 items-center
                lg:grid-cols-3 lg:gap-0"
            >
                {/* Title */}
                <RevealSectionTitle
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2"
                >
                    How it{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>works</i>
                </RevealSectionTitle>

                {/* Description */}
                <p className="text-xl text-zinc-600">
                    We&apos;ve streamlined the process — so your trip feels effortless
                    from the start
                </p>
            </div>

            {/* Streamline */}
            <div className="h-full relative">
                {/* Dotted path */}
                <svg
                    className="absolute top-12 left-0 w-full h-80 pointer-events-none hidden
                    lg:block"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 50 100 
                        C 200 200, 200 0, 500 100 
                        S 800 40, 950 100"
                        stroke="#f15b34"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="6,10"
                    />
                </svg>

                {/* Processes */}
                <div
                    className="relative top-0 w-full grid grid-cols-1 gap-20
                    lg:absolute lg:top-12 lg:grid-cols-3"
                >
                    {/* 1 */}
                    <div
                        className="relative top-0 flex flex-col gap-10 items-center
                        lg:top-10 md:items-start"
                    >
                        {/* Image */}
                        <div
                            className="relative left-0 h-56 w-56 bg-[#f3f3f3] flex items-center justify-center rounded-full
                            md:left-5"
                        >
                            <div className="h-48 w-44 -rotate-6 bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
                            <motion.div
                                initial={{ scale: 0.8, rotate: 12 }}
                                whileInView={{ scale: 1, rotate: -12 }}
                                viewport={{ amount: 0.4, once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 4,
                                    mass: 1,
                                    duration: 0.5,
                                    delay: 0.3,
                                }}
                                className="absolute top-0 left-5 h-48 w-40 bg-white flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    alt="beach"
                                    src="/images/home/process/beach.png"
                                    className="w-20"
                                />
                            </motion.div>
                        </div>

                        {/* Texts */}
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h1 className="text-xl font-bold">Book & Relax</h1>
                            <p className="text-center text-zinc-600 text-nowrap">
                                Tell us your dream destination and
                                <br />
                                we&apos;ll take care of all the details.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div
                        className="flex flex-col gap-10 items-center justify-center relative top-0
                        lg:top-10"
                    >
                        {/* Image */}
                        <div className="relative h-56 w-56 bg-[#f3f3f3] flex items-center justify-center rounded-full">
                            <div className="h-48 w-44 rotate-6 bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
                            <motion.div
                                initial={{ scale: 0.8, rotate: -12 }}
                                whileInView={{ scale: 1, rotate: 12 }}
                                viewport={{ amount: 0.4, once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 4,
                                    mass: 1,
                                    duration: 0.5,
                                    delay: 0.3,
                                }}
                                className="absolute top-0 left-5 h-48 w-40 -rotate-12 bg-white flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    alt="beach"
                                    src="/images/home/process/bag.png"
                                    className="w-20"
                                />
                            </motion.div>
                        </div>

                        {/* Texts */}
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h1 className="text-xl font-bold">Pack & Prepare</h1>
                            <p className="text-center text-zinc-600 text-nowrap">
                                Get your personalized itinerary and
                                <br />
                                checklist so you&apos;re ready to go.
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div
                        className="flex flex-col gap-10 items-center relative top-0
                        md:items-end lg:top-10"
                    >
                        {/* Image */}
                        <div
                            className="relative right-0 h-56 w-56 bg-[#f3f3f3] flex items-center justify-center rounded-full
                            md:right-5"
                        >
                            <div className="h-48 w-44 -rotate-6 bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
                            <motion.div
                                initial={{ scale: 0.8, rotate: 12 }}
                                whileInView={{ scale: 1, rotate: -12 }}
                                viewport={{ amount: 0.4, once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 4,
                                    mass: 1,
                                    duration: 0.5,
                                    delay: 0.3,
                                }}
                                className="absolute top-0 left-5 h-48 w-40 bg-white flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    alt="beach"
                                    src="/images/home/process/travel.png"
                                    className="w-20"
                                />
                            </motion.div>
                        </div>

                        {/* Texts */}
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h1 className="text-xl font-bold">Travel & Enjoy</h1>
                            <p className="text-center text-zinc-600 text-nowrap">
                                Experience the journey without
                                <br />
                                stress, we handle everything for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
