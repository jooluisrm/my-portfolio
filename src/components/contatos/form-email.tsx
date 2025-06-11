"use client"

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    title: z
        .string()
        .min(4, "O título deve ter no mínimo 4 caracteres.")
        .max(25, "O título deve ter no máximo 25 caracteres."),
    name: z
        .string()
        .min(2, "O nome deve ter pelo menos 2 caracteres."),
    email: z
        .string()
        .email("Digite um e-mail válido."),
    message: z
        .string()
        .min(10, "A mensagem deve ter no mínimo 10 caracteres.")
        .max(1000, "A mensagem deve ter no máximo 1000 caracteres."),
    time: z.string(), // Campo oculto, não precisa de validação aqui
});


export function FormEmail() {
    const formRef = useRef<HTMLFormElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            email: "",
            message: "",
            name: "",
            time: "",
        },
    });

    // Atualiza o campo time sempre que o formulário for renderizado
    useEffect(() => {
        form.setValue(
            "time",
            new Date().toLocaleString("pt-BR", {
                timeZone: "America/Sao_Paulo",
                dateStyle: "short",
                timeStyle: "short",
            })
        );
    }, []);

    function onSubmit() {
        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_d2iqyzv",
                "template_4eblw6a",
                formRef.current,
                "jvCsuaXU-gVnEGQU6"
            )
            .then(
                () => {
                    alert("Mensagem enviada com sucesso!");
                    form.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("Erro ao enviar. Tente novamente.");
                }
            );
    }

    return (
        <Form {...form}>
            <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 max-w-md flex-1"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Assunto</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Assunto" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Seu e-mail" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Sua mensagem" rows={4} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Campo oculto de time */}
                <input
                    type="hidden"
                    name="time"
                    value={form.getValues("time")}
                />

                <Button
                    type="submit"
                    className="cursor-pointer"
                    disabled={true}
                >Enviar Mensagem</Button>
            </form>
        </Form>
    );
}
