import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Typewriter } from "./typewriter";
import { TextFlip } from "./text-flip";
import { TextHoverEffect } from "../ui/text-hover-effect";

export const HeroMain = () => {
    return (
        <main className="bg-white">
            <BackgroundLines className="flex items-center h-screen">
                <div className="z-10 container mx-auto flex flex-col items-center gap-10 pt-10 md:flex-row md:justify-between">
                    <div className="flex flex-col gap-10">
                        <div>
                            <Typewriter />
                            <span className="text-sm xl:text-xl">Dev. Front-end, <span className="text-blue-500"><TextFlip /></span></span>
                        </div>
                        <div className="flex gap-5">
                            <Link href={'https://www.linkedin.com/in/jaoluisrm/'} target="_blank">
                                <Linkedin />
                            </Link>
                            <Link href={'https://github.com/jooluisrm'} target="_blank">
                                <Github />
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            alt="Avatar"
                            src={'/tim-maia.png'}
                            width={400}
                            height={400}
                            className="rounded-full w-52 md:w-[400px]"
                        />
                    </div>
                </div>
            </BackgroundLines>
        </main>
    );
}