import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { fetchStories } from "@/app/utils/fetchStories";
import { SERVER_URL } from "@/constants/url";

// Stories section
export default async function StoriesSection() {
    // Stories
    const { stories } = await fetchStories();

    return (
        <section
            className="h-auto px-5 py-16 bg-[#f3f3f3] flex flex-col gap-16
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

            {/* Stories */}
            {stories.length > 0 && (
                <Carousel className="w-full">
                    <CarouselContent className="gap-5 py-2">
                        {stories.map((str) => (
                            <CarouselItem
                                key={str.documentId}
                                className="md:basis-1/2 lg:basis-1/3 p-8 flex flex-col gap-6 justify-between border border-black rounded-3xl"
                            >
                                <p className="text-xl text-zinc-600">{str.description}</p>
                                <div className="flex items-center gap-5">
                                    <div>
                                        <Image
                                            width={64}
                                            height={64}
                                            src={SERVER_URL + (str.image.url || "")}
                                            alt="avatar"
                                            className="w-12 h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="text-base">
                                        <h3 className="font-bold">{str.name}</h3>
                                        <p>{str.location}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}

            {/* No stories */}
            {stories.length === 0 && (
                <div className="h-[60vh] flex items-center justify-center">
                    <h1 className="text-3xl font-semibold">Stories not found!</h1>
                </div>
            )}
        </section>
    );
}
