import { IPackage } from "@/app/utils/fetchPackages";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { SERVER_URL } from "@/constants/url";
import { Clock, MapPin } from "lucide-react";
import { div } from "motion/react-client";
import Image from "next/image";

// Interface for Props
interface Props {
    pkg: IPackage;
}

// Title section
export default function TitleSection({ pkg }: Props) {
    return (
        <section
            className="min-h-screen pt-16 mt-24 bg-white flex flex-col gap-16
            md:pt-24"
        >
            {/* Heading */}
            <div
                className="px-5 grid grid-cols-1 gap-10
                md:px-10 xl:px-24 lg:grid-cols-3"
            >
                {/* Title */}
                <RevealSectionTitle
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2 xl:text-[80px]"
                >
                    {pkg.title}
                </RevealSectionTitle>

                {/* Description */}
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-2 text-xl">
                        <MapPin className="w-5 h-5" />
                        <p>{pkg.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                        <Clock className="w-5 h-5" />
                        <p>{pkg.days}</p>
                    </div>
                    <p className="text-xl text-zinc-600 mt-5">
                        Indulge in our carefully crafted packages to immerse you in the most
                        captivating and transformative travel adventures.
                    </p>
                </div>
            </div>

            {/* Image */}
            {pkg.images[1]?.url ? (
                <Image
                    width={1000}
                    height={1000}
                    src={SERVER_URL + pkg.images[1]?.url}
                    alt={pkg.title}
                    className="h-screen w-full object-cover object-center"
                />
            ) : (
                <div className="h-screen w-full flex items-center justify-center">
                    <Image
                        width={1000}
                        height={1000}
                        src="/svgs/no-image.svg"
                        alt={pkg.title}
                        className="w-80"
                    />
                </div>
            )}
        </section>
    );
}
