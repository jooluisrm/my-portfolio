import { LiNav } from "./liNav";
import { ThemeButton } from "./theme-button";

export const NavMd = () => {
    return (
        <nav className="z-50 hidden md:flex items-center gap-20">
            <ul className="flex gap-8">
                <LiNav text="Início" />
                <LiNav text="Tecnologias" />
                <LiNav text="Projetos" />
                <LiNav text="Contatos" />
            </ul>
            <div>
                <ThemeButton />
            </div>
        </nav>
    );
}