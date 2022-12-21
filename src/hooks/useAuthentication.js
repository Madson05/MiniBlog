import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import {useState, useEffect} from "react";

export const useAuthentication = () =>{
    const [error, setErrors] = useState(null);
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
}