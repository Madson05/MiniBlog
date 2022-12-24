import {db} from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import {useState, useEffect} from "react";

export const useAuthentication = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    // cleanup
    // deal with memory leak

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }
    // register
    const createUser = async (data)=>{
        checkIfIsCancelled();

        setError(null)

        setLoading(true)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
                );
            
            
            await updateProfile(
                user,
                {displayName: data.displayName}
                )

                setLoading(false);

                return user;

        } catch(error){
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("password")){
                systemErrorMessage = "A senha precisa conter no minimo 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "Email já cadastrado."
            } else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!"
            }

            setLoading(false)

            setError(systemErrorMessage);

        }

        

        
    }

    // logout - sign-out

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }



    useEffect(() => {
        return setCancelled(true);
    }, [])

    

    return {
        auth,
        createUser,
        error,
        logout,
        loading,
        
    }
}