"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { ThemeButton } from "./theme-button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { LiNav } from "./liNav";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

export const NavCell = () => {
    const [open, setOpen] = useState(false);
    const sectionIds = ["início", "sobre", "tecnologias", "projetos", "contatos"];
    const activeSection = useActiveSection(sectionIds);

    const handleItemClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // fecha o menu
        }
    };

    return (
        <>
            <div className="z-50 md:hidden">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            className="cursor-pointer"
                            onClick={() => setOpen(true)}
                        >
                            <Menu size={28} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Menu</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="md:hidden">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col items-center gap-8 text-center">
                        <ul className="flex flex-col gap-8">
                            {sectionIds.map((id) => (
                                <LiNav
                                    key={id}
                                    text={id}
                                    isActive={activeSection === id}
                                    onClick={() => handleItemClick(id)}
                                />
                            ))}
                        </ul>
                        <div className="hidden">
                            <ThemeButton />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
};
