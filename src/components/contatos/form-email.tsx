"use client"

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function FormEmail() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_d2iqyzv",
                "template_4eblw6a",
                form.current,
                "jvCsuaXU-gVnEGQU6"
            )
            .then(
                () => {
                    alert("Mensagem enviada com sucesso!");
                    form.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("Erro ao enviar. Tente novamente.");
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md flex-1">
            <Input
                type="text"
                name="title"
                placeholder="Assunto"
                required
                className="p-2 border rounded"
            />
            <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                className="p-2 border rounded"
            />
            <Input
                type="email"
                name="user_email"
                placeholder="Seu e-mail"
                required
                className="p-2 border rounded"
            />
            <Textarea
                name="message"
                placeholder="Sua mensagem"
                required
                rows={4}
                className="p-2 border rounded"
            />
            <Input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    dateStyle: "short",
                    timeStyle: "short",
                })}
            />
            <Button
                type="submit"
                className="cursor-pointer"
            >
                Enviar Mensagem
            </Button>
        </form>
    );
}
