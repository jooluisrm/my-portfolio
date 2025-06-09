import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SlideData } from "../ui/carousel2"
import Image from "next/image"

type Props = {
    item: SlideData;
}

export function CarouselDialog({item}: Props) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {item.images && item.images.map((item, index) => (
                    <CarouselItem key={index} className="">
                        <Image 
                            alt=""
                            src={'/tim-maia.png'}
                            width={400}
                            height={200}
                            className="object-cover rounded-2xl"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
