const services = [
    "Ajustes e reformas em geral",
    "Consertos rápidos com acabamento fino",
    "Confecção sob medida para ocasiões especiais",
];

export const About = () => {
    return (
        <section
            id="about"
            className="flex min-h-screen items-center justify-center px-4 py-20"
        >
            <div className="container grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
                <div className="text-left">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary-foreground/80">
                        SOBRE NÓS
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-background sm:text-4xl">
                        Tradição, cuidado e carinho em cada peça
                    </h2>
                    <p className="mt-5 text-base leading-7 text-background/80">
                        O Ateliê Ihara une experiência artesanal e atenção aos detalhes para entregar roupas que vestem melhor e duram mais.
                        Cada serviço é realizado de forma personalizada, com foco no seu estilo e no caimento ideal.
                    </p>
                </div>

                <div className="rounded-xl border border-background/20 bg-background/90 p-6 text-left shadow-lg">
                    <h3 className="text-lg font-semibold text-primary">O que fazemos</h3>
                    <ul className="mt-4 space-y-3">
                        {services.map((service) => (
                            <li key={service} className="flex items-start gap-3 text-primary">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary-foreground" />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
