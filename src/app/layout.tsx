import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./fonts/dmSans";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
    title: "Gompass.trip",
    description: "Travel Agency",
};

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
