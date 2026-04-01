
import App from './App'
import { TaskDetails } from './features/tasks/pages/TaskDetails'
import { TaskHome } from './features/tasks/pages/TaskHome'
import { About } from './layout/pages/About'
import { FAQ } from './features/FAQ/FAQ'
import { Home } from './layout/pages/Home'
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
                element : <Home />
            },
            {
                path : "tasks",
                element : <TaskHome />
            },
            {
                path : "/task/:id",
                element : <TaskDetails />

            },
            {
                path : "faq",
                element : <FAQ /> 
            },
            {
                path : "about",
                element : <About /> 
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