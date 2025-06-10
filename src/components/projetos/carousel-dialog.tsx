import * as React from "react"
import { Image } from 'primereact/image';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SlideData } from "../ui/carousel2"
import { View } from "lucide-react";


type Props = {
    item: SlideData;
}

export function CarouselDialog({ item }: Props) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {item.images && item.images.map((item, index) => (
                    <CarouselItem key={index} >
                        <Image src={item} indicatorIcon={<View />} alt="Image" preview />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
