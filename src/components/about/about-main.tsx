import { TitleSection } from "../titleSection";
import { CardApresentacao } from "./card-apresentacao";
import { CardEducacao } from "./card-educacao";

export const AboutMain = () => {
    return (
        <section id="sobre" className="container mx-auto px-5 md:px-0 pb-20">
            <TitleSection text="Sobre mim" />
            <div className="flex flex-col gap-10 md:flex-row md:justify-around ">
                <CardApresentacao />
                <CardEducacao />
            </div>

        </section>
    );
}