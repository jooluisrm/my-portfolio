import { TitleSection } from "../titleSection";
import { CarouselProjects } from "./carouselProjects";

export const ProjetosMain = () => {
    return (
        <section id="projetos">
            <TitleSection text="Projetos"/>
            <div>
                <CarouselProjects />
            </div>
        </section>
    );
}