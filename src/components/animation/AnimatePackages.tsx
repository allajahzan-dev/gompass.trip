"use client";

import { IPackage } from "@/app/utils/fetchPackages";
import { SERVER_URL } from "@/constants/url";
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
            className="relative h-[424px] rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] cursor-pointer overflow-hidden"
        >
            {/* Image */}
            <Image
                width={200}
                height={200}
                // src={pkg.images[0]}
                src={SERVER_URL + pkg.images[0]?.url}
                alt={pkg.title}
                className="h-full w-full object-cover object-center scale-105"
            />

            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>

            {/* Details */}
            <div className="w-full p-5 absolute bottom-0 left-0 text-white flex items-end justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">{pkg.title}</h1>
                    <p>{pkg.days}</p>
                </div>
                <p className="text-base">₹{pkg.price}</p>
            </div>
        </motion.div>
        </a>
    );
}
