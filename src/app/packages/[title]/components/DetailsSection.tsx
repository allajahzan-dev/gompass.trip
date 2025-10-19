import { IPackage } from "@/app/utils/fetchPackages";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, CircleX, Dot } from "lucide-react";

// Interface for Props
interface Props {
    pkg: IPackage;
}

// Details section
export default function DetailsSection({ pkg }: Props) {
    return (
        <section
            className="min-h-screen px-5 py-16 bg-white grid grid-cols-1
            md:px-10 xl:px-24 md:py-24 lg:grid-cols-3"
        >
            <div
                className="col-span-1 flex flex-col gap-16 text-zinc-600
                lg:col-span-2"
            >
                {/* Price and quota */}
                <div className="space-y-5">
                    <span className="flex items-center gap-5 text-xl">
                        <p className="w-32">Pirce</p>
                        <p className="text-black font-semibold">{pkg.price}</p>
                    </span>

                    <span className="flex items-center gap-5 text-xl">
                        <p className="w-32">Quota</p>
                        <p className="text-black font-semibold">20 Available</p>
                    </span>
                </div>

                {/* Line */}
                <div className="w-full h-[1px] bg-zinc-200 rounded-full" />

                {/* Include and excludes */}
                <div className="flex flex-col gap-10">
                    <p className="text-xl">{pkg.description2}</p>

                    <div className="space-y-5">
                        <h1 className="text-4xl text-black font-bold">Includes:</h1>
                        <div className="flex flex-col gap-2">
                            {pkg.includes.map((inlcude, index) => (
                                <span key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-8 h-8 fill-black text-white self-start shrink-0" />
                                    <p className="text-xl">{inlcude.value}</p>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h1 className="text-4xl text-black font-bold">Excludes:</h1>
                        <div className="flex flex-col gap-2">
                            {pkg.excludes.map((exclude, index) => (
                                <span key={index} className="flex items-center gap-2">
                                    <CircleX className="w-8 h-8 fill-black text-white self-start shrink-0" />
                                    <p className="text-xl">{exclude.value}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Line */}
                <div className="w-full h-[1px] bg-zinc-200 rounded-full" />

                {/* Activit plans */}
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl text-black font-bold">Travel Plans:</h1>

                    <Accordion type="single" collapsible className="text-black space-y-5">
                        {pkg.plans.map((plan, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-[#f2f1f3] px-8 py-2 flex flex-col gap-5 border border-black rounded-lg
                                md:flex-row "
                            >
                                <AccordionTrigger className="text-xl cursor-pointer">
                                    <div
                                        className="flex flex-col gap-3
                                        md:flex-row md:items-center"
                                    >
                                        <p className="font-bold">{plan.day.toUpperCase()}</p>
                                        <p>{plan.title}</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div
                                        className="flex flex-col relative left-0
                                        md:left-38"
                                    >
                                        {plan.activities.map((act, index) => (
                                            <span key={index} className="flex items-center">
                                                <Dot className="w-5 h-5" />
                                                <p className="text-base">{act.activity}</p>
                                            </span>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
