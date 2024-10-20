export default function Header() {
    return (
        <header className="p-2 flex items-center justify-between bg-slate-400 sticky">
            <h1 className="text-2xl font-semibold">Fonseca SocialMedia</h1>
            <ul className="flex gap-2">
                <a className="hover:text-secondary font-sans" href="#projetos">Projetos</a>
                <a className="hover:text-secondary font-sans" href="#servico">Servico</a>
                <a className="hover:text-secondary font-sans" href="#">Contato</a>
            </ul>
        </header>
    )
}