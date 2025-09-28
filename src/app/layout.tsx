import type { Metadata } from "next";
import { dmSans } from "./fonts/dmSans";
import Navbar from "./components/navbar/Navbar";
import "./globals.css"

export const metadata: Metadata = {
    title: "Gompass.trip",
    description: "Travel Agency",
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
            </body>
        </html>
    );
}
