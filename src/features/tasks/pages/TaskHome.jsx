import { NavLink } from "react-router"


export const TaskHome = () => {
    return (
        <>
        <section className="py-6 px-12 flex items-center gap-6">
            <img className="w-40" src="/icons/tardis.svg" alt="Image du tardis" />
            <h1 className="text-3xl text-main-900 font-bungee">Tu as plein de chose à faire, allons-y !</h1>
        </section>

        <section className="flex flex-col px-12">

            <NavLink to="/task/1">Voir details tâche 1</NavLink>
            <NavLink to="/task/2">Voir details tâche 2</NavLink>
            <NavLink to="/task/3">Voir details tâche 3</NavLink>

        </section>
        </>
    )
}