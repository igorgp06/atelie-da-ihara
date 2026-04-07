import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { cn } from "../../../../lib/utils";

export const Hero = () => {
    return (

        <div className="relative min-h-screen flex flex-col align-center justify-center px-4" id="home">

            <div className="container max-w-5xl mx-auto text-center">
                <div className="space-y-1 ">
                    <div className="mb-4">
                        <h1 className="opacity-0 font-semibold animate-fade-in-delay-1 text-3xl md:text-4xl text-primary">
                            IHARA
                        </h1>
                        <h2 className="text-primary opacity-0 font-bold text-4xl md:text-5xl animate-fade-in-delay-2 hover:text-glow transition-all duration-300 block">
                            {"  "}
                            <span className="text-primary">CONFECÇÕES</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-base sm:text-lg text-primary opacity-0 animate-fade-in-delay-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas fugit voluptates? Nulla saepe dolores veniam deleniti eligendi assumenda tempore.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">
                    <Link
                        to="#"
                        className={cn("inline-block px-4 py-3 bg-card text-primary font-semibold",
                            "rounded-md shadow-md border border-primary-foreground opacity-0 animate-fade-in-delay-4",
                            "hover:bg-background hover:text-glow transition-all duration-300"
                        )}
                    >
                        Lorem, ipsum.
                    </Link>

                    <Link
                        to="#"
                        className={cn("inline-block px-4 py-3 bg-background text-primary-foreground font-semibold",
                            "rounded-md shadow-md border opacity-0 animate-fade-in-delay-5",
                            "border-primary-foreground hover:bg-primary hover:text-glow transition-all duration-300"
                        )}
                    >
                        Lorem, ipsum.
                    </Link>

                </div>
            </div>

            <a href="#about" className="absolute bottom-5 left-0 right-0 flex flex-col items-center text-primary animate-bounce z-16 opacity-40">
                <span className="text-sm text-primary mb-1">Veja Mais</span>
                <span className="hover:scale-1.10 transition-transform duration-300">
                    <ArrowDown className="h-5 w-5 text-primary-emphasis transition-transform duration-300" />
                </span>
            </a>
        </div>
    )
} 