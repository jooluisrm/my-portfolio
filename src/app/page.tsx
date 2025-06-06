import { Header } from "@/components/header/header";
import { HeroMain } from "@/components/hero/hero-main";
import { TecnologiaMain } from "@/components/tecnologia/tecnologia-main";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
    return (
        <div>
            <HeroMain /> 
            <TecnologiaMain />
        </div>
    );
}
