import MainSection from "./components/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ title: string }>;
}

// Package
export default async function Package({ params }: Props) {
    const data = await params;
    return <MainSection title={data.title} />
}