import { IPackage } from "@/app/utils/fetchPackages";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { Clock, MapPin } from "lucide-react";

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
            <div
                style={{
                    // backgroundImage: `url(${pkg.images[1]})`,
                    backgroundImage: `url(http://localhost:1337${pkg.images[1].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="h-screen"
            />
        </section>
    );
}
