export function NotFound() {
    return (
        <div
            className="w-screen h-screen flex justify-center items-center flex-col">
            <h1
                className="text-gray-100 font-semibold mb-10">Ops! Essa página não existe! 🙂‍↔️
            </h1>
            <a
                href="/"
                className="font-semibold  text-center text-green-100 hover:text-green-200 transition ease-linear">Voltar
            </a>
        </div>
    )
}