import { notFound } from "next/navigation";
import MainSection from "./components/sections/MainSection";

// Home
export default function Home() {
    notFound();
    return <MainSection />;
}
