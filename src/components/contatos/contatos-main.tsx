import { TitleSection } from "../titleSection";
import { CardContatos } from "./cardContatos";

export const ContatosMain = () => {
    return (
        <section id="contatos">
            <TitleSection text="Contatos"/>
            <CardContatos />
        </section>
    );
}