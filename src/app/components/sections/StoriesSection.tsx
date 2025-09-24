import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "../animations/RevealSectionTitle";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

// Stories section
export default function StoriesSection() {
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
                    Real{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>stories</i>
                    <br />
                    from travelers
                </RevealSectionTitle>

                {/* Description */}
                <div className="flex gap-5 items-end justify-end">
                    <Image
                        width={32}
                        height={32}
                        src="/svgs/quote.svg"
                        alt="quote"
                        className="w-10 h-10"
                    />
                </div>
            </div>

            <Carousel className="relative">
                <CarouselContent className="gap-5">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-8 flex flex-col gap-5 border border-black rounded-3xl">
                        <p>My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip.</p>
                        <div className="flex items-center">
                            <div>
                                <Image
                                    width={64}
                                    height={64}
                                    src="/images/avatar.png"
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full"
                                />
                            </div>
                            <div className="">
                                <h3>Ahsan allaj pk</h3>
                                <p>Laskadweep</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"></CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    );
}
