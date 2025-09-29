'use client';

import Link from "next/link";
import { usePackages } from "@/lib/graphql/hooks";
import AnimatePackages from "@/components/animation/AnimatePackages";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import Loader from "@/app/components/animations/Loader";
import { cn } from "@/lib/utils";
import { playfair } from "@/app/fonts/playfair";

// Package section with GraphQL
export default function PackageSectionGraphQL() {
    // Fetch packages using GraphQL hook
    const { packages, loading, error } = usePackages();

    if (loading) {
        return (
            <section className="min-h-screen px-5 py-16 bg-white flex items-center justify-center md:px-10 xl:px-24 md:py-24">
                <Loader>Loading packages...</Loader>
            </section>
        );
    }

    if (error) {
        console.error('Error loading packages:', error);
        return (
            <section className="min-h-screen px-5 py-16 bg-white flex items-center justify-center md:px-10 xl:px-24 md:py-24">
                <div className="text-center">
                    <p className="text-red-600 mb-4">Error loading packages</p>
                    <p className="text-gray-600">Please try again later</p>
                </div>
            </section>
        );
    }

    return (
        <section
            className="min-h-screen px-5 py-16 bg-white flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            {/* Heading */}
            <div
                className="grid grid-cols-1 gap-10
                lg:grid-cols-3 lg:gap-0"
            >
                {/* Title */}
                <RevealSectionTitle
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2"
                >
                    Must{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>experience</i>
                    <br />
                    packages
                </RevealSectionTitle>

                {/* Description */}
                <div className="flex flex-col gap-5 items-start">
                    <p className="text-xl text-zinc-600">
                        Indulge in our carefully crafted packages to immerse you in the most
                        captivating and transformative travel adventures.
                    </p>
                    <Link
                        href="/packages"
                        className="group font-semibold py-2 cursor-pointer"
                    >
                        See All Packages
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            &nbsp;&nbsp;&nbsp;→
                        </span>
                    </Link>
                </div>
            </div>

            {/* Packages */}
            <div
                className="grid grid-cols-1 gap-5
                md:grid-cols-2 xl:grid-cols-4"
            >
                {packages.map((pkg) => (
                    <AnimatePackages key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </section>
    );
}