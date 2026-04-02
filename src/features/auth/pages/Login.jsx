import { LoginForm } from "./components/LoginForm"


export const Login = () => {



    return (
        <>
        <section className="py-12 px-44 flex flex-col gap-4 items-start">
                    <h1 className="text-5xl text-main-500 underline">Se connecter</h1>
                </section>
                
                <section className="flex justify-center">
                <LoginForm />
                </section>

        
        </>
    )
}