import { AboutMain } from "@/components/about/about-main";
import { ContatosMain } from "@/components/contacts/contatos-main";
import { HeroMain } from "@/components/hero/hero-main";
import { ProjetosMain } from "@/components/projects/projetos-main";
import { TecnologiaMain } from "@/components/technology/tecnologia-main";
import { PrimeReactProvider } from 'primereact/api';

export default function Home() {
    return (
        <PrimeReactProvider>
            <main className="dark:bg-black overflow-x-hidden">
                <HeroMain />
                <AboutMain />
                <TecnologiaMain />
                <ProjetosMain />
                <ContatosMain />
            </main>
        </PrimeReactProvider>
    );
}
