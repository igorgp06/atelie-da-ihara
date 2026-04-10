import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { cn } from "../../../../lib/utils";

export const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center bg-background px-4 pt-24"
        >
            <div className="container mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold tracking-[0.25em] text-primary opacity-0 animate-fade-in-delay-1">
                    ATELIÊ DE COSTURA
                </p>

                <h1 className="mt-4 text-4xl font-bold text-primary opacity-0 animate-fade-in-delay-2 sm:text-5xl md:text-6xl">
                    IHARA <span className="text-primary-foreground">CONFECÇÕES</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base text-primary opacity-0 animate-fade-in-delay-3 sm:text-lg">
                    Modelagem, ajustes e peças sob medida com acabamento cuidadoso para valorizar o seu estilo e o seu conforto em cada detalhe.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#about"
                        className="rounded-md border border-primary-foreground bg-card px-5 py-3 font-semibold text-primary opacity-0 shadow-md transition-colors duration-300 hover:bg-background animate-fade-in-delay-4"
                    >
                        Conheça o ateliê
                    </a>

                    <a
                        href="#contato"
                        className="rounded-md border border-primary-foreground bg-background px-5 py-3 font-semibold text-primary-foreground opacity-0 shadow-md transition-colors duration-300 hover:bg-primary hover:text-background animate-fade-in-delay-5"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </div>

            <a
                href="#about"
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-primary/70"
            >
                <span className="text-sm">Role para ver mais</span>
                <ArrowDown className="mt-1 h-5 w-5 animate-bounce" />
            </a>
        </section>
    );
};
