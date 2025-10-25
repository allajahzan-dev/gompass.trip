import type { Metadata } from "next";
import { dmSans } from "../fonts/dmSans";
import Navbar from "./components/navbar/Navbar";
import "./globals.css"
import ContactIndicator from "./components/animations/ContactIndicator";

export const metadata: Metadata = {
    title: "Gompass Travel Experts",
    description: "Gompass Travel Experts offers curated travel packages to top destinations. Explore adventure trips, holiday tours, and affordable vacation packages designed for unforgettable experiences.",
};

// Root layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={dmSans.className}>
            <body>
                <Navbar />
                {children}
                {/* <ContactIndicator/> */}
            </body>
        </html>
    );
}
