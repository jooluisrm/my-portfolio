

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var rounded-full">
            <CardBody className="relative group/card w-auto h-auto rounded-full">
                <CardItem translateZ="100" className="w-full rounded-full">
                    {/* Borda de gradiente */}
                    <div className="bg-zinc-900 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 ">
                        <Image
                            alt="Avatar"
                            src="/joao.png"
                            width={400}
                            height={400}
                            className="rounded-full w-52 h-52 md:w-[350px] md:h-[350px] object-cover"
                            quality={75}
                            loading="eager"
                            priority={true}
                        />
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
