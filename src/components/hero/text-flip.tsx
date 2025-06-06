import { FlipWords } from "../ui/flip-words";

export const TextFlip = () => {

    const words = ["React.js", "Next.js", "TailwindCSS", "Shadcn-UI"];

    return (
        <>
            <FlipWords words={words} /> <br />
        </>
    );
}