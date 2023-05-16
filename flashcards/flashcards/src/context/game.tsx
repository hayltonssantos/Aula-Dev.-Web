import { createContext, useEffect, useState } from "react";

import firebaseApp from '../../services/firebase'

import { getFirestore,addDoc, collection, getDocs, onSnapshot, query, setDoc, updateDoc, doc } from 'firebase/firestore'

const GameContext = createContext({})

const GameProvider = ({children}) =>{

    const [point, setPoint] = useState(0)
    const db = getFirestore(firebaseApp)

    const aux: any = []
    const checkResponse = (response: string, back: string, user: any) =>{
        response = response.toLowerCase()
        back = back.toLowerCase()
        
        if (response === back) {
            handleAdd(user)
            return true
        }
    }

    const attPoints = (user) =>{
        const q = query(collection(db, 'points'))
        onSnapshot(q, (querySnapshot)=>{
            querySnapshot.forEach((doc:any) =>{
                /* console.log(doc.id, doc.data) */
                if (doc.id === user.email){
                    aux.push({
                        id: doc.id,
                        ...doc.data()
                        
                    })
                }
            
            })
            {aux.map((m: any)=>(
                setPoint(m.point)
             ))}
        })
    }

    const getPoints = (user) =>{
        attPoints(user)
        {aux.map((m: any)=>(
            setPoint(m.point)
         ))}
         console.log('erds')
    }
    
    const handleAdd = async function(user){
        attPoints(user)
        const message_json = {
            point: point + 10
            
        }

        const doceref = await setDoc(doc(db,`points/${user.email}`), message_json)
        const updateRef = await updateDoc(doc(db,`points/${user.email}`), message_json)
        
    }

    return (
        <GameContext.Provider value={{point, checkResponse, getPoints}}>
            {children}
        </GameContext.Provider>
    )
}
export {GameContext, GameProvider}