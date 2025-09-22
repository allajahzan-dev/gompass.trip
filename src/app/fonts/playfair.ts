import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export { playfair };
