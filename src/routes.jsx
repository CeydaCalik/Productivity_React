
import App from './App'
import { TaskDetails } from './features/tasks/pages/TaskDetails'
import { TaskHome } from './features/tasks/pages/TaskHome'
import { About } from './layout/pages/About'
import { FAQ } from './features/FAQ/FAQ'
import { Home } from './layout/pages/Home'
import { NotFound } from './layout/pages/NotFound'
import { Register } from './features/auth/pages/Register'
import { Login } from './features/auth/pages/Login'



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
                path : "auth",
                children : [
                    {
                        path: 'register',
                        element : <Register />
                    },
                    {
                        path : 'login',
                        element : <Login />
                    }
                ] 
            }
        ]
    }
]