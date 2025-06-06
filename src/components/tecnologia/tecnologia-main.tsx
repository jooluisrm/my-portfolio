"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { CardsFocus } from "./cardsFocus";
import { CardsTec } from "./cardsTec";
import { TitleSection } from "./titleSection";

export const TecnologiaMain = () => {

    const [cardsFocus, setCardFocus] = useState(false);

    return (
        <section className="">
            <TitleSection />
            {!cardsFocus && <CardsTec />}
            {cardsFocus && <CardsFocus />}
            <div className="justify-center py-10 z-50 hidden md:flex">
                <Button variant={"secondary"} className="cursor-pointer" onClick={() => setCardFocus(!cardsFocus)}>{!cardsFocus ? "Desativar " : "Ativar "} Animações</Button>
            </div>
        </section>
    );
}