import { TitleSection } from "../titleSection";
import { CardContatos } from "./cardContatos";
import { FormEmail } from "./form-email";

export const ContatosMain = () => {
    return (
        <section id="contatos" className="container mx-auto pb-20">
            <TitleSection text="Contatos"/>
            <div className="flex flex-col md:justify-between items-center gap-5 md:flex-row lg:justify-around">
                <FormEmail />
                <CardContatos />
            </div>
            
        </section>
    );
}