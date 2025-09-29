import MainSectionGraphQL from "./MainSectionGraphQL";

// Interface for Props
interface Props {
    title: string;
}

// Main section wrapper
export default function MainSection({ title }: Props) {
    return <MainSectionGraphQL title={title} />;
}
