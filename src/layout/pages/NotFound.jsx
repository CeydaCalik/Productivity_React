
export const NotFound = () => {

    return (
        <>
        <section className="flex flex-col items-center gap-2 py-4 grow justify-center">
            <h1 className="text-9xl text-main-500 drop-shadow-lg font-bold font-bungee">
                404
            </h1>
            <h2 className="text-lg text-main-900 font-bungee tracking-wide font-bold"> La ressource que vous cherchez n'existe pas</h2>
            <img className= "h-86" src="/images/dalek.jpg" alt="Image de Dalek" />
        </section>
        </>
    )
}