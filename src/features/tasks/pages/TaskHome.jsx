import { NavLink } from "react-router"


export const TaskHome = () => {
    return (
        <>
        <section className="py-12 px-44 flex flex-row  gap-4 items-start">
            <img className="w-20" src="/icons/tardis.svg" alt="Image du tardis" />
            <h1 className="text-5xl text-main-500">Tu as plein de chose à faire, allons-y !</h1>
            <img className="w-20" src="/icons/tardis.svg" alt="Image du tardis" />

        </section>

        <section className="flex flex-col px-12">

            <NavLink to="/task/1">Voir details tâche 1</NavLink>
            <NavLink to="/task/2">Voir details tâche 2</NavLink>
            <NavLink to="/task/3">Voir details tâche 3</NavLink>

        </section>
        </>
    )
}