

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card w-auto h-auto rounded-xl">
                <CardItem translateZ="100" className="w-full">
                    <Image
                        alt="Avatar"
                        src={'/joao.png'}
                        width={400}
                        height={400}
                        className="rounded-full w-52 h-52 md:w-[350px] md:h-[350px] object-cover"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
