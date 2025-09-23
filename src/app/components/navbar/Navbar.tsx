"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Navbar
export default function Navbar() {
    // Toggle navitems
    const [toggle, setToggle] = useState<boolean>(false);

    // Stop scrollbar
    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [toggle]);

    // Close navitems on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setToggle(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav
            className="absolute z-10 top-0 left-0 w-full py-8 px-5 text-white flex items-center justify-between
            md:px-10 xl:px-24"
        >
            <Link href={"/"} className="flex items-center gap-2">
                <Image
                    width={1000}
                    height={1000}
                    quality={100}
                    src={"/images/home/hero/logo.jpg"}
                    alt="logo"
                    className="w-8 rounded-full shadow-md border-2 border-white"
                />

                <p className={cn("text-xl font-semibold")}>
                    <span className="text-[#f15b34]">Go</span>mpass.trip
                </p>
            </Link>

            {/* Nav items on desktop */}
            <div
                className="hidden items-center gap-20
                lg:flex"
            >
                <Link className="hover:underline underline-offset-8" href={"/trips"}>
                    Trips
                </Link>
                <Link className="hover:underline underline-offset-8" href={"/gallery"}>
                    Gallery
                </Link>
                <Link className="hover:underline underline-offset-8" href={"/about"}>
                    About
                </Link>
                <Link className="hover:underline underline-offset-8" href={"/contact"}>
                    Contact
                </Link>
            </div>

            {/* Nav items on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="block cursor-pointer
                lg:hidden"
            >
                {/* Hamburger */}
                <Hamburger action={() => setToggle(!toggle)} toggle={toggle} />

                {/* Nav items */}
                <div
                    className={cn(
                        "fixed z-40 h-full w-full top-0 left-0 bg-black/60",
                        "flex items-center justify-end",
                        toggle ? "-translate-x-0" : "translate-x-full"
                    )}
                >
                    <div
                        className={cn(
                            "w-[300px] h-full pt-28 px-10 bg-[#141414] flex flex-col justify-start items-end gap-10",
                            "transition-transform duration-300 ease-in-out",
                            toggle ? "translate-x-0" : "translate-x-100",
                            "sm:w-[400px] md:w-[500px]"
                        )}
                    >
                        <Link
                            onNavigate={() => setToggle(false)}
                            className="w-full py-1 text-end border-b border-zinc-600 hover:border-white"
                            href={"/"}
                        >
                            Home
                        </Link>
                        <Link
                            onNavigate={() => setToggle(false)}
                            className="w-full py-1 text-end border-b border-zinc-600 hover:border-white"
                            href={"/trips"}
                        >
                            Trips
                        </Link>
                        <Link
                            onNavigate={() => setToggle(false)}
                            className="w-full py-1 text-end border-b border-zinc-600 hover:border-white"
                            href={"/gallery"}
                        >
                            Gallery
                        </Link>
                        <Link
                            onNavigate={() => setToggle(false)}
                            className="w-full py-1 text-end border-b border-zinc-600 hover:border-white"
                            href={"/about"}
                        >
                            About
                        </Link>
                        <Link
                            onNavigate={() => setToggle(false)}
                            className="w-full py-1 text-end"
                            href={"/contact"}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
