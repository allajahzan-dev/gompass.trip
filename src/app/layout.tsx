import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./fonts/dmSans";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/animations/Loader";

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
                <Loader>
                <Navbar />
                {children}
                </Loader>
            </body>
        </html>
    );
}
