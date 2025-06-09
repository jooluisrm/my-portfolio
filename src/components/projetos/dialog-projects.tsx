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
import { Github, Globe } from "lucide-react";
import { ItemTechStack } from "./item-techStack";

type Props = {
    slide: SlideData;
}

export const DialogProjects = ({ slide }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mt-6 cursor-pointer">
                    {slide.button}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{slide.title}</DialogTitle>
                    <DialogDescription>
                        {slide.description}
                    </DialogDescription>
                    {slide.techStack && (
                        <div className="flex gap-4 pb-5">
                            {slide.techStack.map((item, index) => (
                                <ItemTechStack key={index} text={item} />
                            ))}
                        </div>
                    )
                    }

                </DialogHeader>
                <main className="max-h-[75vh] overflow-y-auto overflow-x-hidden pr-2 pb-10 lg:pb-0">
                    <div className="flex justify-center">
                        <CarouselDialog item={slide} />
                    </div>

                    <div className="mt-6 space-y-3">
                        <h4 className="text-lg font-medium">Links - {slide.type}</h4>

                        <div className="flex flex-col gap-2 font-bold transition-all hover:transition-all">
                            {slide.github?.frontend && (
                                <Link href={slide.github.frontend} target="_blank" className="flex items-center gap-2 text-blue-500 hover:underline">
                                    <Github className="w-4 h-4" />
                                    GitHub Front-End
                                </Link>
                            )}

                            {slide.github?.backend && (
                                <Link href={slide.github.backend} target="_blank" className="flex items-center gap-2 text-blue-500 hover:underline">
                                    <Github className="w-4 h-4" />
                                    GitHub Back-End
                                </Link>
                            )}

                            {slide.deploy?.link && (
                                <Link href={slide.deploy.link} target="_blank" className="flex items-center gap-2 text-green-600 hover:underline">
                                    <Globe className="w-4 h-4" />
                                    Projeto Online
                                </Link>
                            )}
                        </div>
                    </div>
                </main>

            </DialogContent>
        </Dialog>
    );
}