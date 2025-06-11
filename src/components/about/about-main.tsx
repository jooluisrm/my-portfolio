import { TitleSection } from "../titleSection";
import { CardApresentacao } from "./card-apresentacao";
import { CardEducacao } from "./card-educacao";

export const AboutMain = () => {
    return (
        <section id="sobre" className="container mx-auto px-5 md:px-0 pb-20">
            <TitleSection text="Sobre mim" />
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
                <CardApresentacao />
                <CardEducacao />
            </div>

        </section>
    );
}