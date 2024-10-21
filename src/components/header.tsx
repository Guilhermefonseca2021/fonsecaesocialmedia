export default function Header() {
    return (
        <header className="p-2 flex items-center justify-between bg-secondary sticky shadow-lg">
            <h1 className="text-2xl text-gray-500 font-semibold">Fonseca SocialMedia</h1>
            <ul className="flex gap-2">
                <a className="hover:text-gray-500 font-sans" href="#projetos">Projetos</a>
                <a className="hover:text-gray-500 font-sans" href="#servico">Servico</a>
                <a className="hover:text-gray-500 font-sans" href="#">Contato</a>
            </ul>
        </header>
    )
}