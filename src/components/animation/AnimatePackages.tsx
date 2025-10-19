"use client";

import { IPackage } from "@/app/utils/fetchPackages";
import { SERVER_URL } from "@/constants/url";
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

// Interface for Props
interface Props {
    pkg: IPackage;
}

// Animate packages
export default function AnimatePackages({ pkg }: Props) {
    return (
        <a href={`/packages/${pkg.title.split(" ").join("-").toLowerCase()}`}>
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-[424px] rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] border cursor-pointer overflow-hidden"
            >
                {/* Image */}
                {pkg.images[0]?.url ? (
                    <Image
                        width={200}
                        height={200}
                        src={SERVER_URL + pkg.images[0]?.url}
                        alt={pkg.title}
                        className="h-full w-full object-cover object-center scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center  rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src="/svgs/no-image.svg"
                            alt={pkg.title}
                            className="w-32 relative -top-16"
                        />
                    </div>
                )}

                {/* Shadow */}
                {pkg.images[0]?.url && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                )}

                {/* Details */}
                <div
                    className={cn(
                        "w-full p-5 absolute bottom-0 left-0 flex items-end justify-between",
                        pkg.images[0]?.url ? "text-white" : "text-black"
                    )}
                >
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">{pkg.title}</h1>
                        <div className="space-y-1">
                            <div className="flex items-center gap-4">
                                <MapPin className="w-4 h-4 shrink-0" />
                                <p>{pkg.location}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="w-4 h-4 shrink-0" />
                                <p>{pkg.days}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-base">₹{pkg.price}</p>
                </div>
            </motion.div>
        </a>
    );
}
