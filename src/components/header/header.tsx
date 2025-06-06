import { Cover } from "../ui/cover";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextHoverEffect } from "../ui/text-hover-effect";

export const Header = () => {
    return (
        <section className="container mx-auto absolute">
            <div className="text-3xl pt-5">
                <Cover>Meu Portifólio</Cover>
            </div>
        </section>
    );
}