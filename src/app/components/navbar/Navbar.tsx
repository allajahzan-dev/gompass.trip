import { playfair } from "@/app/fonts/playfair";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Navbar
export default function Navbar() {
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

                <p className={cn(playfair.className, "text-xl font-medium italic")}>
                    Gompass.trip
                </p>
            </Link>

            <div className="flex items-center gap-20">
                <Link className="hover:underline" href={"/trips"}>Trips</Link>
                <Link className="hover:underline" href={"/gallery"}>Gallery</Link>
                <Link className="hover:underline" href={"/about"}>About</Link>
                <Link className="hover:underline" href={"/contact"}>Contact</Link>
            </div>
        </nav>
    );
}
