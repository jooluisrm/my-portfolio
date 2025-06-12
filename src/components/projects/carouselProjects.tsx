import Carousel from "@/components/ui/carousel2";
import { slideData } from "@/data/projects";

export function CarouselProjects() {
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
