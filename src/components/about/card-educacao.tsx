"use client"

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/background-gradient";
import { TitleCard } from "./title-card";

export const CardEducacao = () => {
    return (
        <CardContainer className="flex-1 max-w-[500px] h-full">
            <BackgroundGradient className="flex flex-col h-full rounded-[22px] sm:p-10 bg-black">
                <CardBody className="flex-1 flex flex-col">
                    <main className="p-10 md:p-0">
                        <div>
                            <TitleCard text="Educação/Cursos" />

                            <div className="space-y-6">
                                {/* Técnico em Informática */}
                                <div className="border-l-4 border-blue-500 bg-muted/50 dark:bg-zinc-800 rounded-xl p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold">Ensino Médio de Técnico em Informática</h3>
                                    <p className="text-sm text-muted-foreground">IFNMG - Campus Arinos</p>
                                    <p className="text-sm">
                                        Fev. 2020 – Jan. 2023{" "}
                                        <span className="text-green-500 font-medium">(Concluído)</span>
                                    </p>
                                </div>

                                {/* Bacharelado */}

                                <div className="border-l-4 border-purple-500 bg-muted/50 dark:bg-zinc-800 rounded-xl p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold">Bacharelado em Sistemas de Informação</h3>
                                    <p className="text-sm text-muted-foreground">IFNMG - Campus Arinos</p>
                                    <p className="text-sm">
                                        Mai. 2023 – Dez. 2027{" "}
                                        <span className="text-yellow-500 font-medium">(Em andamento)</span>
                                    </p>
                                </div>



                                {/* Curso B7Web */}
                                <div className="border-l-4 border-pink-500 bg-muted/50 dark:bg-zinc-800 rounded-xl p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold">Curso Full-Stack</h3>
                                    <p className="text-sm text-muted-foreground">B7Web</p>
                                    <p className="text-sm">Início: Dez. 2023</p>
                                </div>
                            </div>

                        </div>
                    </main>
                </CardBody>
            </BackgroundGradient>
        </CardContainer>
    );
}