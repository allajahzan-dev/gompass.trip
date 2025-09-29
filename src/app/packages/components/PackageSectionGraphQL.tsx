'use client';

import AnimatePackages from "@/components/animation/AnimatePackages";
import { usePackages } from "@/lib/graphql/hooks";
import Loader from "@/app/components/animations/Loader";

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
            {/* Packages */}
            <div
                className="grid grid-cols-1 gap-5
                md:grid-cols-2 xl:grid-cols-3"
            >
                {packages.map((pkg) => (
                    <AnimatePackages key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </section>
    );
}