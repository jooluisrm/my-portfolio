import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FileUser, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
    text: "Linkedin" | "GitHub" | "Currículo";
    link: string;
}

export const LinkRedes = ({ text, link }: Props) => {
    return (
        <Tooltip>
            <TooltipTrigger >
                {/* Adicione o atributo download aqui para o currículo */}
                {text === "Currículo" ? (
                    <Link href={link} target="_blank" download>
                        <FileUser />
                    </Link>
                ) : (
                    <Link href={link} target="_blank">
                        {text === "Linkedin" && <Linkedin />}
                        {text === "GitHub" && <Github />}
                    </Link>
                )}
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    );
}