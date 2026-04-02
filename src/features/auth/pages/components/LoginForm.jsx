import { useId, useState } from "react";
import authService from "../../../../services/auth.service";
import { useNavigate } from "react-router";


export const LoginForm = () => {

    const id = useId();

    const navigate = useNavigate();

    const [error, setError] = useState();

    
    const handleLoginSubmit = async (formData) => {

        console.log(formData);


        const data = Object.fromEntries(formData.entries());

        
            
            await authService.login(data);
    
            navigate("/");


    }


    return (
        <>
        
                
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

                {error && <p className="text-red-600">{error}</p>}
            </form>
                    

                </section>

        
        </>
    )
}