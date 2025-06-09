import { ContatosMain } from "@/components/contatos/contatos-main";
import { Header } from "@/components/header/header";
import { HeroMain } from "@/components/hero/hero-main";
import { ProjetosMain } from "@/components/projetos/projetos-main";
import { TecnologiaMain } from "@/components/tecnologia/tecnologia-main";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
    return (
        <main className="dark:bg-black">
                <HeroMain />
                <TecnologiaMain />
                <ProjetosMain />
                <ContatosMain />
        </main>
    );
}
