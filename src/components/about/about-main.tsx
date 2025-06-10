import { TitleSection } from "../titleSection";
import { CardApresentacao } from "./card-apresentacao";
import { CardEducacao } from "./card-educacao";

export const AboutMain = () => {
    return (
        <section className="container mx-auto px-5 md:px-0">
            <TitleSection text="Sobre mim" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <CardApresentacao />
                <CardEducacao/>
            </div>
        </section>
    );
}