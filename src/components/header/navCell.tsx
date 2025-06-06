"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { ThemeButton } from "./theme-button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { LiNav } from "./liNav";
import { useState } from "react";

export const NavCell = () => {
    const [open, setOpen] = useState(false);

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
                            <LiNav text="Início" />
                            <LiNav text="Tecnologias" />
                            <LiNav text="Projetos" />
                            <LiNav text="Contatos" />
                        </ul>
                        <div>
                            <ThemeButton />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
}
