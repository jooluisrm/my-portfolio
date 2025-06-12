import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Typewriter } from "./typewriter";
import { TextFlip } from "./text-flip";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { ThreeDCardDemo } from "./card-3d";
import { LinkRedes } from "./linkRedes";
import { Button } from "../ui/button";

export const HeroMain = () => {
    return (
        <section className="bg-white" id="início">
            <BackgroundLines className="flex items-center min-h-screen">
                <div className="z-10 h-full container px-4 mx-auto flex gap-10 lg:gap-0 flex-col-reverse items-center justify-center lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-10">
                        <div>
                            <Typewriter />
                            <span className="text-sm xl:text-xl">Dev. Front-end, <span className="text-blue-500"><TextFlip /></span></span>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex gap-5">
                                <LinkRedes
                                    link="https://www.linkedin.com/in/jaoluisrm/"
                                    text="Linkedin"
                                />
                                <LinkRedes
                                    link="https://github.com/jooluisrm"
                                    text="GitHub"
                                />
                                <LinkRedes 
                                    link={"/mycv/cv-joao-luis-rodrigues-de-moura.pdf"}
                                    text="Currículo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ThreeDCardDemo />
                    </div>
                </div>
            </BackgroundLines>
        </section>
    );
}