
import App from './App'
import { NotFound } from './layout/pages/NotFound'

/**
 * @type {import("react-router").RouteObject[]}
 */
export const routes = [
    {

        path : "/", 
        element : <App />,
        children : [
            {
                index : true,
                element : <div>Home page</div>
            },
            {
                path : "task",
                element : <div>Mes tâches à faire</div>
            },
            {
                path : "*",
                element : <NotFound /> 
            },
            {
                path : "login",
                element : <div>Me connecter</div>
            }
        ]
    }
]