import { ContatosMain } from "@/components/contatos/contatos-main";
import { HeroMain } from "@/components/hero/hero-main";
import { ProjetosMain } from "@/components/projetos/projetos-main";
import { TecnologiaMain } from "@/components/tecnologia/tecnologia-main";

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
