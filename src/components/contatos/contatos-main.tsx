import { TitleSection } from "../titleSection";
import { CardContatos } from "./cardContatos";

export const ContatosMain = () => {
    return (
        <section>
            <TitleSection text="Contatos"/>
            <CardContatos />
        </section>
    );
}