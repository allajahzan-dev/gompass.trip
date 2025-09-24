import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "../animations/RevealSectionTitle";
import { cn } from "@/lib/utils";

// Contact section
export default function ContactSection() {
    return (
        <section
            className="relative h-auto px-5 py-10 bg-white flex flex-col gap-16   
            md:px-10 xl:px-24 md:py-24"
        >
            {/* Heading */}
            <div className="flex flex-col items-center justify-center gap-10">
                {/* Title */}
                <RevealSectionTitle
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2 xl:text-7xl"
                >
                    Ready to{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>embark</i>
                    <br />
                    on a<i className={cn(playfair.className, "text-[#f15b34]")}>
                        new
                    </i>{" "}
                    journey?
                </RevealSectionTitle>

                {/* Description */}
                <p
                    className="text-lg text-zinc-600 text-center px-0
                   lg:text-xl md:px-16 lg:px-24"
                >
                    Don&apos;t let your dream getaway remain a dream any longer. Take action
                    now and let us craft your next unforgettable adventure. Join us in
                    turning your travel fantasies into unforgettable realities.
                </p>
            </div>
        </section>
    );
}
