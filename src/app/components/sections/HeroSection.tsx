import { playfair } from "@/app/fonts/playfair";
import { cn } from "@/lib/utils";

// Here section
export default function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: "url('/images/home/hero/hero-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-[98vh] flex items-center justify-center text-white"
        >
            <div className="px-5 py-3 font-bold absolute top-36 -translate-x-1/2 left-1/2 bg-white/30 backdrop-blur-xs rounded-full">
                <p>The Best Place to Start Your Adventure</p>
            </div>

            {/* Title */}
            <div className="text-center">
                <h1 className="text-[80px] font-normal leading-[1] mb-4">
                    Embark on{" "}
                    <span className={cn(playfair.className, "italic")}>journeys</span>
                    <br />
                    not <span className={cn(playfair.className, "italic")}>
                        just
                    </span>{" "}
                    destinations
                    <br />
                    with{" "}
                    <span className={cn(playfair.className, "italic")}>our trips.</span>
                </h1>
            </div>

            <div
                className="w-full px-5 absolute bottom-20 -translate-x-1/2 left-1/2 flex items-center justify-between
                md:px-10 xl:px-24"
            >
                {/* Description */}
                <p>
                    Unlock the doors to diverse cultures, awe-inspiring
                    <br />
                    landscapes, and thrilling adventures with us.
                </p>

                {/* Explore button */}
                <button className="font-semibold px-8 py-2 border border-white rounded-full">
                    Explore Now&nbsp;&nbsp;&nbsp;→
                </button>
            </div>
        </section>
    );
}
