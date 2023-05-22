import { createContext, useEffect, useState } from "react";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

const UserContext = createContext({})

const UserProvider = ({ children }: any) => {

    const auth = getAuth();
    const [couldLogin] = useState<any>(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState<any>('')

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const listenAuth = (/* userState: any */) => {
       /*  console.log('listenAuth', userState) */
        setUser(auth.currentUser as any)
        setLoading(false)
    }



    const signIn = (email: string, password: string) => {
        /* console.log('xxx', email, password) */
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then((/* userCredential */) => {


        }).catch((/* error */) => {
           /* console.log('error', error) */
           setErr(true)
            setLoading(false)
        })

    }

    const signOut = () => {
        /* console.log('sai!!!') */
        setLoading(true)

        signOutFirebase(auth)
            .then(() => {
                /* console.log("deslogado com sucesso") */
            }).catch(() => {
                /* console.log('error', error) */
                setLoading(false)
            })
    }

    const createUser = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((/* userCredential */) => {
            // Signed in
           /* const user = userCredential.user
           console.log(user + 'aqqqq') */
            
            // ...
        })
        .catch((/* error */ ) => {
            /* const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode) */
            setErr(true)
            // ..
        });
    }

    return (
        <UserContext.Provider value={{ couldLogin, signIn, signOut, user, loading, createUser, err }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }