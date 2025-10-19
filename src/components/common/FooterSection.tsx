import { fetchContacts } from "@/app/utils/fetchContacts";
import { Copyright, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

// Footer section
export default async function FooterSection() {
    // Contacts
    const { contact } = await fetchContacts();

    return (
        <footer
            className="h-auto px-5 py-16 pb-5 bg-[#141414] flex flex-col gap-16
            md:px-10 xl:px-24"
        >
            {/* Footer items */}
            <div
                className="w-full grid grid-cols-1 gap-10
                lg:grid-cols-4 xl:grid-cols-6"
            >
                {/* 1 */}
                <div className="space-y-3">
                    <h1 className="text-white font-semibold text-lg">Discover</h1>
                    <ul className="flex flex-col gap-2 text-[#c4c4c4] text-base [&>a]:hover:underline [&>a]:cursor-pointer">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>About Us</Link>
                        <Link href={"/trips"}>Trip Packages</Link>
                        <Link href={"/gallery"}>Gallery</Link>
                        <Link href={"/contact"}>Contact</Link>
                    </ul>
                </div>

                {/* 2 */}
                <div className="space-y-3">
                    <h1 className="text-white font-semibold text-lg">Services</h1>
                    <ul className="flex flex-col gap-2 text-[#c4c4c4] text-base [&>a]:hover:underline [&>a]:cursor-pointer">
                        <Link href={"/trips"}>Trip Itinerary</Link>
                        <Link href={"/trips"}>Trip Preparations</Link>
                        <Link href={"/contact"}>Booking Form</Link>
                    </ul>
                </div>

                {/* 3 */}
                <div className="space-y-3">
                    <h1 className="text-white font-semibold text-lg">Packages</h1>
                    <ul className="flex flex-col gap-2 text-[#c4c4c4] text-base [&>a]:hover:underline [&>a]:cursor-pointer">
                        <Link href={"/trips"}>Popular Trip</Link>
                        <Link href={"/trips"}>Personal Tour</Link>
                        <Link href={"/trips"}>Group Tour</Link>
                        <Link href={"/trips"}>Business Tour</Link>
                        <Link href={"/about"}>Testimonials</Link>
                    </ul>
                </div>

                {/* 4 */}
                <div className="space-y-3">
                    <h1 className="text-white font-semibold text-lg">Support</h1>
                    <ul className="flex flex-col gap-2 text-[#c4c4c4] text-base [&>a]:hover:underline [&>a]:cursor-pointer">
                        <Link href={"/contact"}>Customer Service</Link>
                        <Link href={"/about"}>Terms & Condition</Link>
                        <Link href={"/contact"}>Privacy Policy</Link>
                        <Link href={"/contact"}>Refund Policy</Link>
                        <Link href={"/contact"}>Travel Policy</Link>
                    </ul>
                </div>

                {/* 5 */}
                <div
                    className="col-span-1 flex justify-start
                    lg:col-span-2 xl:justify-center"
                >
                    <div className="space-y-6">
                        <h1 className="text-white font-semibold text-xl">Contacts</h1>
                        <ul className="flex flex-col gap-4 text-[#c4c4c4] text-base [&>a]:hover:underline [&>a]:cursor-pointer">
                            <a href={`tel:+91${contact?.phone || "8157905882"}`} className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-white shrink-0" />
                                +91 {contact?.phone || "8157905882"}
                            </a>
                            <li className="flex items-center gap-4">
                                <MapPin className="w-5 h-5 text-white shrink-0 self-start" />
                                {contact?.address ||
                                    "5th mile, Mananthavady, Kellur, Kerala 670645"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="flex flex-col gap-2">
                {/* Line */}
                <div className="w-full h-[1px] bg-zinc-600 rounded-full" />

                {/* Socials */}
                <div
                    className="py-5 flex flex-col justify-between gap-5
                    lg:flex-row"
                >
                    <div className="flex items-center gap-5 text-white">
                        <Link
                            href={"https://www.instagram.com/gompass.trip"}
                            target="_blank"
                        >
                            <Instagram className="w-7 h-7" />
                        </Link>
                    </div>

                    <p className="flex items-center gap-1 text-[#c4c4c4]">
                        <Copyright className="w-4 h-4" />
                        {new Date().getFullYear()} Gompass. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
