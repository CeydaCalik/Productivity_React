import { useId } from "react";
import { useNavigate } from "react-router";
import authService from "../../../services/auth.service";
import { useForm } from "react-hook-form";


export const Login = () => {

    const id = useId();

    const navigate = useNavigate

    const formState = useForm()

    const handleLoginSubmit = async (credentials) => {




        await authService.login();

        navigate("/")
    }


    return (
        <>
        <section className="py-12 px-44 flex flex-col gap-4 items-start">
                    <h1 className="text-5xl text-main-500 underline">Se connecter</h1>
                </section>
                
                <section className="flex justify-center">
                <form action={handleLoginSubmit}> 
                <div>
                    <label htmlFor={id + 'email'}>Email d'utilisateur :</label>
                    <input id={id + 'email'} name="email" type="email"/>
                </div>

                <div>
                    <label htmlFor={id + 'password'}>Mot de passe :</label>
                    <input id={id + 'password'} name="password" type="password"/>
                </div>

                <button type="submit" className="btn">S'enregistrer 🪛</button>
            </form>

                </section>

        
        </>
    )
}