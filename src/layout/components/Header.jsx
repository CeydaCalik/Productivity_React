import { NavLink } from "react-router"


export const Header = () => {
    return (
        <>
        <header className="flex justify-between items-center py-4 px-8 bg-primery-200">

            <div className="flex items-center gap-4">
                <img className="w-12" src="../icons/tardis.svg" alt="Logo du site "/>

                <p className="text-main-900 uppercase text-2xl font-bold ">Productivity</p>
            </div>

            <nav>
                <ul className="text-main-500 flex items-center gap-6 font-bold text-lg">
                    
                    <li>
                        <NavLink to={"/"}> Accueil </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/tasks"}> Mes tâches </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/pomodoro"}>Pomodoro</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={"/faq"}> FAQ </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/about"}> À propos </NavLink>
                    </li>

                    <li>
                        <NavLink className="btn" to={"auth/login"}>Se connecter</NavLink>
                    </li>

                    <li>
                        <NavLink className="btn" to={"auth/register"}>Créer un compte</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
        
        </>
    )
}