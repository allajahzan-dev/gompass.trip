import Link from "next/link";
import { fetchPackages } from "@/app/utils/fetchPackages";
import AnimatePackages from "../animations/AnimatePackages";
import RevealSectionTitle from "../animations/RevealSectionTitle";
import { cn } from "@/lib/utils";
import { playfair } from "@/app/fonts/playfair";

// Package section
export default async function PackageSection() {
    // Packages
    const { packages } = await fetchPackages();

    return (
        <section
            className="min-h-screen px-5 py-24 bg-white flex flex-col gap-12
            md:px-10 xl:px-24"
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
                    viewport={{ amount: 0.5, once: true }}
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
                        href="/trips"
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
