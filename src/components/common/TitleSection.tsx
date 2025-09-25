import { playfair } from "@/app/fonts/playfair";
import RevealSectionTitle from "@/components/animation/RevealSectionTitle";
import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    text: string[];
    bgImage: string;
}

// Title section
export default function TitleSection({ text, bgImage }: Props) {
    return (
        <section
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="h-[350px] px-5 py-16 mt-24 bg-white flex flex-col items-center justify-center gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            {/* Title */}
            <div className="flex items-center gap-4">
                <RevealSectionTitle
                    initial={{ opacity: 0, position: "relative", top: 50, right: 50 }}
                    whileInView={{ opacity: 1, position: "relative", top: 0, right: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2 text-white xl:text-7xl"
                >
                    {text[0]}
                </RevealSectionTitle>

                <RevealSectionTitle
                    initial={{ opacity: 0, position: "relative", bottom: 50, left: 50 }}
                    whileInView={{ opacity: 1, position: "relative", bottom: 0, left: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 lg:col-span-2 text-white xl:text-7xl"
                >
                    <i className={cn(playfair.className, "text-[#f15b34]")}>{text[1]}</i>
                </RevealSectionTitle>
            </div>
        </section>
    );
}
