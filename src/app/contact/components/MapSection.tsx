import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";

// Map section
export default function MapSection() {
    return (
        <section
            className="min-h-screen px-5 py-16 bg-[#f3f3f3] flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            <div className="flex flex-col items-center justify-between gap-10">
                {/* Title */}
                <RevealSectionTitle
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1"
                >
                    Find Us on{" "}
                    <i className={cn(playfair.className, "text-[#f15b34]")}>Maps</i>
                </RevealSectionTitle>

                {/* Description */}
                <p
                    className="text-lg text-zinc-600 text-center px-0
                   lg:text-xl md:px-16 lg:px-24"
                >
                    Discover our location easily, where comfort meets convenience. We are
                    placed at the heart of the city, offering a welcoming space for all
                    visitors. Our spot makes it simple to connect, explore, and begin your
                    journey with us.
                </p>
            </div>

            {/* Map */}
            <div className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238055.77421427326!2d75.46882730348686!3d11.243326200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e7fa565f7f%3A0xf43c062d5e4eefda!2sSouth%20Beach%20Kozhikode!5e1!3m2!1sen!2sin!4v1758767960237!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-2xl"
                ></iframe>
            </div>
        </section>
    );
}
