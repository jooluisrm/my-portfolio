"use client"

import { useActiveSection } from "@/hooks/useActiveSection";
import { LiNav } from "./liNav";
import { ThemeButton } from "./theme-button";

export const NavMd = () => {
    const sectionIds = ["início", "sobre", "tecnologias", "projetos", "contatos"];
    const activeSection = useActiveSection(sectionIds);

    return (
        <nav className="z-50 hidden md:flex items-center gap-20">
            <ul className="flex gap-8">
                {sectionIds.map((id) => (
                    <LiNav key={id} text={id} isActive={activeSection === id} />
                ))}
            </ul>
            <div className="hidden">
                <ThemeButton />
            </div>
        </nav>
    );
};
