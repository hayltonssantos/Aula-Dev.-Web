import { createContext, useEffect, useState } from "react";

import firebaseApp from '../../services/firebase'

import { getFirestore,addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'

const GameContext = createContext({})

const GameProvider = ({children}) =>{

    const [point, setPoint] = useState(10)

    const checkResponse = (response: string, back: string) =>{
        response = response.toLowerCase()
        back = back.toLowerCase()
        if (response === back) {
            setPoint(point+10)
            return true
        }
    }

    const changePoints = () =>{}
    return (
        <GameContext.Provider value={{point, checkResponse}}>
            {children}
        </GameContext.Provider>
    )
}
export {GameContext, GameProvider}