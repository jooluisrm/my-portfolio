import * as React from "react"
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



type Props = {
    item: string[] | undefined;
}



export function CarouselDialog({ item }: Props) {
    if (!item || item.length === 0) return null;

    const images: ReactImageGalleryItem[] = item.map((url) => ({
        original: url,
        thumbnail: url, // você pode usar uma versão reduzida se quiser
        loading: "lazy" as const,
    }));

    return (
        <div className="w-full max-w-3xl mx-auto">
            <ImageGallery
                items={images}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={true}
                showIndex={true}
            />
        </div>
    );
}
