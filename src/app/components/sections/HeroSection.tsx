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
            className="min-h-screen flex items-center justify-center text-white"
        >
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
                {/* <p className="text-lg">Discover the best products and services</p> */}
            </div>
        </section>
    );
}
