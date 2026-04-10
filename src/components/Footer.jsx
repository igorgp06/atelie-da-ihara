import { Mail, /* Instagram, */ MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const quickLinks = [
        { name: "Início", to: "/" },
        { name: "Produções", to: "/producoes" },
        { name: "Contato", to: "/contato" },
    ];

    return (
        <footer className="relative flex flex-col align-center justify-center bg-background px-5 py-13">
            <div className="container mx-auto">

                <div className="space-y-4 md:grid md:grid-cols-3 gap-4">

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <div className="flex items-center mb-6 justify-center">
                            <span className="text-2xl font-bold gradient-text">Ateliê da Ihara</span>
                        </div>
                        <p className="text-center justify-center text-md">
                            O Ateliê Ihara é um espaço de comprometimento e cuidado, cada peça é confeccionada com carinho para valorizar o seu estilo e conforto. Com serviços personalizados, ajustes e confecção sob medida, entregamos roupas que vestem e duram mais, refletindo a dedicação artesanal em cada detalhe.
                        </p>
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold  mb-6">Links Rápidos</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="text-primary-foreground hover:text-1xl hover:text-glow transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-6">Contato</h3>
                        <div className="space-y-4 text-center flex flex-col justify-center items-center">

                            <div className="flex items-center space-x-3 hover:text-primary transition-all duration-300">
                                <MessageCircle className="h-5 w-5" />
                                <span className="">(48) 9999-9999</span>
                            </div>
                            <div className="flex items-center space-x-3 hover:underline hover:text-primary transition-all duration-300">
                                <div className="h-5 w-5" /> // TODO: Adicionar ícone do Instagram e corrigir o lucide react
                                <a className="" href="#" /* target="_blank" */>Ateliê da Ihara</a>
                            </div>
                            <div className="flex items-center space-x-3 hover:underline hover:text-primary transition-all duration-300">
                                <Mail className="h-5 w-5" />    
                                <a href="mailto:atelierdaihara@gmail.com" target="_blank">atelierdaihara@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-primary-foreground">
                            ©{new Date().getFullYear()} Ateliê da Ihara. Todos os direitos reservados.
                        </p>
                        <a className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300" href="https://igdeveloper.com.br" target='_blank'>
                            Desenvolvido por Igor Gonçalves | DEV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};