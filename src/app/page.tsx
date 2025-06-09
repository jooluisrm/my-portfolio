import { ContatosMain } from "@/components/contatos/contatos-main";
import { Header } from "@/components/header/header";
import { HeroMain } from "@/components/hero/hero-main";
import { TecnologiaMain } from "@/components/tecnologia/tecnologia-main";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
    return (
        <div className="dark:bg-black">
            <HeroMain /> 
            <TecnologiaMain />
            <ContatosMain />
        </div>
    );
}
