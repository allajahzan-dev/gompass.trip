import { playfair } from "@/app/fonts/playfair";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Navbar
export default function Navbar() {
    return (
        <nav
            className="absolute z-10 top-0 left-0 w-full py-5 px-5 text-white flex items-center justify-between
            md:px-10 xl:px-24"
        >
            <div className="flex items-center gap-2">
                <Image
                    width={1000}
                    height={1000}
                    quality={100}
                    src={"/images/home/hero/logo.jpg"}
                    alt="logo"
                    className="w-10 rounded-full shadow-md border-2 border-white"
                />

                <p className={cn(playfair.className, "text-2xl font-medium italic")}>
                    Gompass.trip
                </p>
            </div>

            <div className="flex items-center gap-20">
                <Link href={"/Trips"}>Trips</Link>
                <Link href={"/Gallery"}>Gallery</Link>
                <Link href={"/About"}>About</Link>
                <Link href={"/Contact"}>Contact</Link>
            </div>
        </nav>
    );
}
