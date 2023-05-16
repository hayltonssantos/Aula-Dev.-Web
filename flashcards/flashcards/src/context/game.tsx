import { createContext, useEffect, useState } from "react";

import firebaseApp from '../../services/firebase'

import { getFirestore,addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'

const GameContext = createContext({})

const GameProvider = ({children}) =>{

    const [point, setPoint] = useState(10)

    const changePoints = () =>{}
    return (
        <GameContext.Provider value={{point}}>
            {children}
        </GameContext.Provider>
    )
}
export {GameContext, GameProvider}