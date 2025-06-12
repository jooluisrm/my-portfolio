import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { SlideData } from "../ui/carousel2";
import { CarouselDialog } from "./carousel-dialog";
import Link from "next/link";
import { Github, Globe, X } from "lucide-react";
import { ItemTechStack } from "./item-techStack";
import { useState } from "react";
import { CloseDialog } from "./close-dialog";

type Props = {
    slide: SlideData;
}

export const DialogProjects = ({ slide }: Props) => {

    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="mt-6 cursor-pointer" onClick={() => setOpen(true)}>
                    {slide.button}
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[95vw] md:min-w-full lg:min-w-[900px] p-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white">

                <div className="max-h-[95vh] flex flex-col overflow-x-hidden">
                    {/* Cabeçalho fixo */}
                    <DialogHeader className="p-6 border-b border-border sticky top-0 z-10 flex-row justify-between">
                        <DialogTitle className="text-wrap break-words">{slide.title}</DialogTitle>
                        <CloseDialog setOpen={setOpen}/>
                    </DialogHeader>

                    {/* Conteúdo rolável */}
                    <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-6 w-full">
                        <div className="w-full overflow-hidden">
                            <CarouselDialog item={slide.images} />
                        </div>

                        <div className="space-y-5">
                            <DialogDescription className="break-words text-wrap text-sm sm:text-base">
                                {slide.description}
                            </DialogDescription>

                            {slide.techStack && (
                                <div className="flex gap-2 flex-wrap break-words">
                                    {slide.techStack.map((item, index) => (
                                        <ItemTechStack key={index} text={item} />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-lg font-medium">Links - {slide.type}</h4>
                            <div className="flex flex-col gap-3 font-bold sm:flex-row sm:justify-around">
                                {slide.github?.frontend && (
                                    <Link
                                        href={slide.github.frontend}
                                        target="_blank"
                                        className="flex items-center gap-2 text-blue-500 hover:underline break-all"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub Front-End
                                    </Link>
                                )}
                                {slide.github?.backend && (
                                    <Link
                                        href={slide.github.backend}
                                        target="_blank"
                                        className="flex items-center gap-2 text-blue-500 hover:underline break-all"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub Back-End
                                    </Link>
                                )}
                                {slide.deploy?.link && (
                                    <Link
                                        href={slide.deploy.link}
                                        target="_blank"
                                        className="flex items-center gap-2 text-green-600 hover:underline break-all"
                                    >
                                        <Globe className="w-4 h-4" />
                                        Projeto Online
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>

        </Dialog>
    );
}