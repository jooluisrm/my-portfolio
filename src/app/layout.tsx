import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider"
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jaoluisrm | Portfólio",
  description: "Desenvolvedor Front-end especializado em React, Next.js e UI moderna. Confira meus projetos e entre em contato!",
  keywords: ["Desenvolvedor", "Front-end", "React", "Next.js", "Portfólio", "Programador", "JavaScript", "Web"],
  authors: [{ name: "João Luís Rodrigues de Moura", url: "https://www.linkedin.com/in/jaoluisrm/" }],
  creator: "João Luís Rodrigues de Moura",
  openGraph: {
    title: "Portfólio | jaoluisrm",
    description: "Veja os projetos e habilidades de um desenvolvedor front-end apaixonado por interfaces modernas.",
    url: "https://jaoluisrm.vercel.app/",
    siteName: "Portfólio | jaoluisrm",
    images: [
      {
        url: "https://jaoluisrm.vercel.app/hero-portifolio.png",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://jaoluisrm.vercel.app/"),
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased vsc-initialized`}
                cz-shortcut-listen="true"
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                        <header className="container mx-auto relative ">
                            <Header />
                        </header>

                        {children}
                        <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
