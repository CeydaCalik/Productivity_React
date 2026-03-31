
export const Header = () => {
    return (
        <>
        <header className="flex justify-between items-center py-4 px-8 bg-primery-200">

            <div className="flex items-center gap-4">
                <img className="w-12" src="./icons/tardis.svg" alt="Logo du site "/>

                <p className="text-main-900 uppercase text-2xl font-bold">Productivity</p>
            </div>

            <nav>
                <ul className="text-main-500 flex items-center gap-6 font-bold text-lg">
                    
                    <li>
                        <a href="">Accueil</a>
                    </li>

                    <li>
                        <a href="">Tâches</a>
                    </li>

                    <li>
                        <a href="">Pomodoro</a>
                    </li>
                </ul>
            </nav>
        </header>
        
        
        </>
    )
}