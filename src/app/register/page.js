"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function RegisterPage(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userCreated, setUserCreated] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);


    async function handleFormSubmit(ev){
        ev.preventDefault();

        setCreatingUser(true);

        await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        setCreatingUser(false);
    }

    return(

    <section className="mt-8">

        <h1 className="text-center text-primary text-4xl mb-4">
            Register
        </h1>

        {userCreated && (
            <div className="my-4 text-center">
                Registration Complete. <Link className="underline" href="/login">Login</Link> to Continue...
            </div>
        )}

        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="email"  value={email} onChange={ev => setEmail(ev.target.value)} disabled={creatingUser}/>
            <input type="text" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} disabled={creatingUser}/>

            <button type="submit" disabled={creatingUser}> Register </button>
            
             <div className="my-4 text-center text-gray-500">
               
            or login with provider
            </div>
        
        <button className="flex gap-4 justify-center" disabled={creatingUser}>  
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"} alt={"google login"} 
                width={24} height={24}/>

          Login with Google 
          
        </button>

        </form>

        
    </section>
    )
    
}