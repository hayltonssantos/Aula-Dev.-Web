import { createContext, useState } from "react";

import firebaseApp from '../../services/firebase'

import { getFirestore,collection, onSnapshot, query, setDoc, updateDoc, doc } from 'firebase/firestore'

const GameContext = createContext({})

const GameProvider = ({children}: any) =>{

    const [point, setPoint] = useState(0)
    const db = getFirestore(firebaseApp)

    const aux: any = []
    const checkResponse = (response: string, back: string, user: any) =>{
        response = response.toLowerCase()
        back = back.toLowerCase()
        
        if (response === back) {
            handleAdd(user, true)
            return true
        }else{
            handleAdd(user, false)
        }
    }

    const attPoints = (user: any) =>{
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

    const getPoints = (user: any) =>{
        attPoints(user)
        {aux.map((m: any)=>(
            setPoint(m.point)
         ))}
    }
    
    const handleAdd = async function(user: any, resp: any){
        attPoints(user)
        if (resp === true) {
            const message_json = {
                point: point + 10
                
            }
            await setDoc(doc(db,`points/${user.email}`), message_json)
            await updateDoc(doc(db,`points/${user.email}`), message_json)
        }else{
            const message_json = {
                point: point - 2
                
            }
            await setDoc(doc(db,`points/${user.email}`), message_json)
            await updateDoc(doc(db,`points/${user.email}`), message_json)
        }

    }

    return (
        <GameContext.Provider value={{point, checkResponse, getPoints}}>
            {children}
        </GameContext.Provider>
    )
}
export {GameContext, GameProvider}