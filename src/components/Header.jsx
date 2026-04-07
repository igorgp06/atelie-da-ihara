import { Link, NavLink } from "react-router-dom";
import { cn } from "../lib/utils"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
    { name: "Início", to: "/" },
    { name: "Produções", to: "/producoes" },
    { name: "Contato", to: "/contato" },
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
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs border-b" : "py-5"
            )}>

                <div className="container flex items-center justify-between">

                    <Link to="/" className="text-2xl font-bold text-primary flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <span className="relative z-10 hover:text-hover transition-all duration-300">
                            Ihara <span className="text-primary-foreground">Confecções</span>
                        </span>
                    </Link>

                    {/* desktop menu */}

                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item, key) => (
                            <NavLink
                                key={key}
                                to={item.to}
                                className={cn(
                                    "text-lg font-medium text-primary transition-all duration-300",
                                    "hover:opacity-80 hover:text-hover"
                                )}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="md:hidden text-primary fixed top-2 right-4 z-50 p-2 hover:opacity-80 transition-all duration-300"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/90 backdrop-blur-md z-49 flex flex-col",
                "items-center justify-center space-x-8 transition-all duration-300 md:hidden",
                isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>

                <div className="flex flex-col space-x-8 gap-8 text-xl text-primary w-full h-full justify-center">
                    {menuItems.map((item, key) => (
                        <NavLink
                            key={key}
                            to={item.to}
                            className={({ isActive }) =>
                                cn(
                                    "text-center font-medium transition-all duration-300 m-0",
                                    isActive
                                        ? "text-primary-foreground"
                                        : "hover:opacity-80 hover:text-hover"
                                )} onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </NavLink>
                    ))}

                </div>
            </div>
        </>
    )
}