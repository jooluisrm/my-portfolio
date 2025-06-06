import React from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { cards } from "@/data/items";

export function CardsTec() {

    return (
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
            <p className=" absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                Desative as animações para melhor visualização!
            </p>
            {cards.map((item, index) => (
                <DraggableCardBody key={index} className={item.className}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none relative z-10 h-80 w-80"
                    />
                    <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
