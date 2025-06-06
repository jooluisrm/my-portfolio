import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

type Props = {
    text: string;
    link: string;
}

export const LinkRedes = ({ text, link }: Props) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link href={`${link}`} target="_blank">
                    {text === "Linkedin" && <Linkedin />}
                    {text === "GitHub" && <Github />}
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    );
}