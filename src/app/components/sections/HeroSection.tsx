import RevealHeroTitle from "../animations/RevealHeroTitle";

// Here section
export default function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: "url('/images/home/hero/hero-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-[96vh] flex items-center justify-center text-white
            sm:h-[86vh] md:h-[90vh] xl:h-[98vh]"
        >
            {/* Label */}
            <div
                className="px-5 py-1 font-bold absolute top-34 -translate-x-1/2 left-1/2 bg-white/30 backdrop-blur-xs rounded-full
                md:py-2 md:top-[154px]"
            >
                <p className="text-nowrap">The Best Place to Start Your Adventure</p>
            </div>

            {/* Title */}
            <RevealHeroTitle />

            <div
                className="w-full px-5 absolute bottom-20 -translate-x-1/2 left-1/2 flex flex-col gap-10 items-center justify-between
                md:px-10 xl:px-24 md:flex-row md:gap-0"
            >
                {/* Description */}
                <p
                    className="text-center
                    md:text-start"
                >
                    Unlock the doors to diverse cultures, awe-inspiring
                    <br className="hidden md:block" />
                    landscapes, and thrilling adventures with us.
                </p>

                {/* Explore button */}
                <button
                    className="font-semibold px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300
                    border border-white rounded-full cursor-pointer"
                >
                    Explore Now&nbsp;&nbsp;&nbsp;→
                </button>
            </div>
        </section>
    );
}
