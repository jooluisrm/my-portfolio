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
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



type Props = {
    item: string[] | undefined;
}



export function CarouselDialog({ item }: Props) {
    if (!item || item.length === 0) return null;

    const images = item.map((url) => ({
        original: url,
        thumbnail: url, // você pode usar uma versão reduzida se quiser
    }));

    return (
        <div className="w-full max-w-3xl mx-auto">
            <ImageGallery items={images} />
        </div>
    );
}
