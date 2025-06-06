import { Cover } from "../ui/cover";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { LiNav } from "./liNav";
import { NavCell } from "./navCell";
import { NavMd } from "./navMd";
import { ThemeButton } from "./theme-button";

export const Header = () => {
    return (
        <section className="container px-4 mx-auto absolute flex justify-between items-center">
            <div className="text-3xl pt-5">
                <Cover>Meu Portifólio</Cover>
            </div>
            <NavMd />
            <NavCell />
        </section>
    );
}