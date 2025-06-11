"use client"

import { LinkRedes } from "../hero/linkRedes";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/background-gradient";

export const CardContatos = () => {
    return (
        <CardContainer className="min-h-[500px]">
            <BackgroundGradient className="bg-black rounded-[22px] min-h-full">
            <CardBody className="px-10 flex flex-col justify-around flex-1 md:w-[400px] h-[300px]" >
                <div className="">
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white"
                    >
                        Contatos
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Informações para contato.
                    </CardItem>
                </div>
                <address className="flex flex-col gap-5">
                    <CardItem
                        translateZ="100"
                        className="text-lg font-bold text-neutral-600 dark:text-white"
                    >
                        E-mail: <br /><span className="text-sm dark:text-white/80">joaoluis4633@gmail.com</span>
                    </CardItem>
                    <CardItem
                        translateZ="100"
                        className="text-lg font-bold text-neutral-600 dark:text-white"
                    >
                        Celular/WhatsApp: <br /><span className="text-sm dark:text-white/80"> +55 (38) 99925-6850</span>
                    </CardItem>

                </address>
            </CardBody>
            </BackgroundGradient>
        </CardContainer>
    );
}