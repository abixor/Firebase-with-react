import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, set, ref } from "firebase/database";


export const firebaseContext = createContext()

export const useFirebase = () => useContext(firebaseContext)

const firebaseConfig = {
    apiKey: "AIzaSyCW1U57rFJhvKi_VIZciPI2izpgpUp-hrA",
    authDomain: "fir-app-f9b63.firebaseapp.com",
    projectId: "fir-app-f9b63",
    storageBucket: "fir-app-f9b63.firebasestorage.app",
    messagingSenderId: "232931041313",
    appId: "1:232931041313:web:1c8e783e929873f24cc360",
    databaseURL: "https://fir-app-f9b63-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export const googleProvider = new GoogleAuthProvider(app)

export const FirebaseProvider = ({ children }) => {

    const [yes, setYes] = useState("1")

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserInDatabse = (email, password) => {
        return set(db, ref('user/' + `${email}`, { email, password }))
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    return (
        <firebaseContext.Provider value={{ yes, setYes, signUpUser, signInUser, setUserInDatabse, signInGoogle }}>
            {children}
        </firebaseContext.Provider>
    )
}
