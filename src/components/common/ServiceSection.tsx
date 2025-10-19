import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";
import { fetchServices } from "@/app/utils/fetchServices";
import { Leaf, Plane, Star, User } from "lucide-react";
import AnimateServices from "@/components/animation/AnimateServices";

// Service section
export default async function ServiceSection() {
    // Services
    const { services } = await fetchServices();

    // Get icons
    const getIcon = (icon: string) => {
        switch (icon) {
            case "User":
                return <User className="w-5 h-5 text-black" />;
            case "Leaf":
                return <Leaf className="w-5 h-5 text-black" />;
            case "Plane":
                return <Plane className="w-5 h-5 text-black" />;
            case "Star":
                return <Star className="w-5 h-5 text-black" />;
            default:
                return null;
        }
    };

    return (
        <section
            className="min-h-screen px-5 py-16 bg-[#f3f3f3]
            md:px-10 xl:px-24 md:py-24"
        >
            <div
                className="grid grid-cols-1 gap-16
                lg:grid-cols-2 lg:gap-20"
            >
                {/* Heading */}
                <div className="flex flex-col justify-between gap-10">
                    {/* Title */}
                    <RevealSectionTitle
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2, once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1"
                    >
                        Our true{" "}
                        <i className={cn(playfair.className, "text-[#f15b34]")}>beliefs</i>
                        <br />
                        for <i className={cn(playfair.className, "text-[#f15b34]")}>
                            your
                        </i>{" "}
                        benefits
                    </RevealSectionTitle>

                    {/* Description */}
                    <p className="text-xl text-zinc-600">
                        Our beliefs aren&apos;t just words; they are the foundation of every
                        adventure we offer. With high commitment to sustainability,
                        authenticity, and customer-centricity, we ensure that every trip you
                        take with us is valuable.
                    </p>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-5 items-start">
                    {services.map((srv) => (
                        <AnimateServices key={srv.id} id={srv.id}>
                            <div
                                className={cn(
                                    "w-full p-6 flex items-center border border-black rounded-2xl",
                                    // srv.id % 2 === 0 && "bg-[#141414]",
                                    "xl:px-12"
                                )}
                            >
                                <div className="flex items-start gap-5">
                                    {/* Icon */}
                                    <div
                                        className={cn(
                                            "p-4 border border-black rounded-full",
                                            // srv.id % 2 === 0
                                            //     ? "border-[#4f4f4f] bg-[#4f4f4f]"
                                            //     : "border-black"
                                        )}
                                    >
                                        {getIcon(srv.icon)}
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-2">
                                        {/* Title */}
                                        <h1
                                            className={cn(
                                                "font-semibold text-black",
                                                // srv.id % 2 === 0 ? "text-white" : "text-black"
                                            )}
                                        >
                                            {srv.title}
                                        </h1>

                                        {/* Description */}
                                        <p
                                            className={cn(
                                                "text-zinc-600",
                                                // srv.id % 2 === 0 ? "text-zinc-300" : "text-zinc-600"
                                            )}
                                        >
                                            {srv.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateServices>
                    ))}
                </div>
            </div>
        </section>
    );
}
