"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { CardsFocus } from "./cardsFocus";
import { CardsTec } from "./cardsTec";
import { TitleSection } from "../titleSection";
import { TracingBeam } from "../ui/tracing-beam";

export const TecnologiaMain = () => {

    const [cardsFocus, setCardFocus] = useState(true);
    const [verMais, setVerMais] = useState(false);

    return (
        <section id="tecnologias" >
            <TracingBeam className="px-6">
                <TitleSection text="Tecnologias" />
                {!cardsFocus && <CardsTec />}
                <div className={`overflow-y-hidden relative flex justify-center transition-all ${verMais ? 'h-auto' : 'max-h-[500px]'}`}>
                    {cardsFocus && <CardsFocus />}
                    {cardsFocus &&
                        <Button
                            variant={'link'}
                            className="absolute bottom-2 cursor-pointer transition-all hover:transition-all"
                            onClick={() => setVerMais(!verMais)}
                        >
                            {verMais ? "Mostrar menos" : "Ver mais"}
                        </Button>}
                </div>

                <div className="flex justify-center py-10 z-50">
                    <Button variant={"secondary"} className="cursor-pointer" onClick={() => setCardFocus(!cardsFocus)}>{!cardsFocus ? "Desativar " : "Ativar "} Animações</Button>
                </div>
            </TracingBeam>
        </section>
    );
}