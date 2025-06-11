"use client"
import { toast } from "sonner"
import { useRef, useEffect, useState } from "react";
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
import { Loader, LoaderCircle } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";

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
    time: z.string(),
});


export function FormEmail() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    toast("Mensagem enviada com sucesso!");
                    formRef.current?.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error.text);
                    toast("Erro ao enviar. Tente novamente.");
                    setLoading(false);
                }
            );
    }

    return (
        <BackgroundGradient className="flex-1 lg:min-w-[400px]">
            <Form {...form}>
                <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 max-w-md bg-black rounded-3xl px-10 py-10"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Assunto</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Motivo do contato" {...field} />
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
                        disabled={loading}
                    >
                        {loading ? <LoaderCircle className="animate-spin duration-150" /> : "Enviar Mensagem"}
                    </Button>
                </form>
            </Form>
        </BackgroundGradient>
    );
}
