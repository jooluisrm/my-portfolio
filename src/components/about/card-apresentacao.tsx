"use client"

import { CardBody, CardContainer } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/background-gradient";
import { TitleCard } from "./title-card";

export const CardApresentacao = () => {
    return (
        <CardContainer className="flex-1 max-w-[500px] h-full">
            <BackgroundGradient className="flex flex-col h-full rounded-[22px] p-4 sm:p-10 bg-black">
                <CardBody className="flex-1 flex flex-col">
                    <main className="">
                        <TitleCard text="Apresentação" />
                        <div className="flex flex-col gap-5 text-lg text-center">
                            <p>
                                <span className="ml-10">Olá!</span> Meu nome é João Luís, tenho 20 anos, atualmente estou cursando Sistemas de Informação e busco uma
                                oportunidades na área de front-end. Tenho sólida experiência com <span className="tec">React</span>, <span className="tec">Next.js</span>, <span className="tec">HTML</span>,
                                <span className="tec">CSS</span>, <span className="tec">JavaScript</span> e <span className="tec">TypeScript</span>,
                                além de domínio em versionamento com <span className="tec">Git</span> e integração com <span className="tec">APIs REST</span>.
                            </p>
                            <p>
                                <span className="ml-10">Também</span> possuo conhecimentos em back-end em <span className="tec">Nodejs</span>,
                                o que me permite compreender toda a estrutura das aplicações e colaborar de maneira mais eficiente com times multidisciplinares.
                            </p>
                        </div>
                    </main>
                </CardBody>
            </BackgroundGradient>

        </CardContainer>
    );
}