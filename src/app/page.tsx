import { ContatosMain } from "@/components/contatos/contatos-main";
import { HeroMain } from "@/components/hero/hero-main";
import { ProjetosMain } from "@/components/projetos/projetos-main";
import { TecnologiaMain } from "@/components/tecnologia/tecnologia-main";
import { PrimeReactProvider } from 'primereact/api';

export default function Home() {
    return (
        <PrimeReactProvider>
            <main className="dark:bg-black">
                <HeroMain />
                <TecnologiaMain />
                <ProjetosMain />
                <ContatosMain />
            </main>
        </PrimeReactProvider>
    );
}
