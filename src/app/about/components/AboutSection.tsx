import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// About section
export default function AboutSection() {
    return (
        <section
            className="min-h-screen px-5 py-16 bg-white flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            <div
                className="grid grid-cols-1 gap-16
                lg:grid-cols-2 lg:gap-10"
            >
                {/* Video and image */}
                <div className="flex flex-col items-center gap-5">
                    <video
                        autoPlay
                        loop
                        muted
                        src="/images/about/about-video.mp4"
                        className="h-56 w-full object-cover rounded-3xl"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        alt="about-image"
                        src="/images/about/about-image.jpg"
                        className="rounded-3xl"
                    />
                </div>

                {/* Details */}
                <div
                    className="flex flex-col items-start justify-center
                    lg:items-end"
                >
                    <div
                        className="w-[100%] flex flex-col gap-10 items-start
                        lg:w-[80%]"
                    >
                        {/* Title */}
                        <RevealSectionTitle
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2, once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="col-span-1 lg:col-span-2"
                        >
                            Crafting{" "}
                            <i className={cn(playfair.className, "text-[#f15b34]")}>travel</i>
                            <br />
                            experiences
                        </RevealSectionTitle>

                        {/* Description */}
                        <div className="flex flex-col gap-10 items-start">
                            <p className="text-xl text-zinc-600">
                                We are passionate about crafting extraordinary travel
                                experiences that leave a lasting impact. With years of
                                expertise, we have honed the art of live curating unique
                                journeys that blend adventure, culture, and sustainability. Our
                                mission is to connect travelers with the world&apos;s wonders
                                while preserving its beauty for generations to come.
                            </p>
                            <Link
                                href="/trips"
                                className="font-semibold px-8 py-2 bg-black hover:bg-zinc-800 text-white transition-colors duration-300
                                rounded-full cursor-pointer"
                            >
                                Explore Now
                                <span>&nbsp;&nbsp;&nbsp;→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
