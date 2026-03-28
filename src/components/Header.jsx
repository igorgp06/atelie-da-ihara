import { Link } from "react-router-dom";
import { cn } from "../lib/utils"
import { useEffect, useState } from "react";

const menuItems = [
    { name: "Início", to: "/" },
    /* TODO: adicionar mais itens ao menu */
]

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); /* TODO: Adicionar lógica para abrir/fechar o menu user icone do lucide react */

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.overflow = "auto";
        };

    }, [isMenuOpen]);

    return (
        <>
            <nav className={cn("fixed w-full top-0 left-0 z-40 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
            )}>

                <div className="container flex items-center justify-between">
                    <Link to="/"
                    className="text-2xl font-bold text-primary-foreground">
                        Ateliê da Ihara
                    </Link>

                </div>

            </nav>
        </>
    )
}