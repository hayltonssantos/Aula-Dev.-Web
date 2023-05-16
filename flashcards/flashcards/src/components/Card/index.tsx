import { useContext, useEffect, useState } from 'react'
import './style.css'
import { GameContext } from '../../context/game'
import { UserContext } from '../../context/user'
import firebaseApp from '../../services/firebase'

import { getFirestore,addDoc, collection, getDocs, onSnapshot, query, where, doc, documentId, setDoc, updateDoc, getDoc } from 'firebase/firestore'

export default function Card({ content }) {

    const [isOpened, setIsOpened] = useState(false)
    const [resp, setResp] = useState()

    const {point, checkResponse} = useContext(GameContext)
    const {user} = useContext(UserContext)
    
    const db = getFirestore(firebaseApp)


    return (
        <div
            className={isOpened ? "card card-opened" : "card"}
            /* onClick={() => {
                setIsOpened(!isOpened)
            }} */
        >
            <div className="content">
                <div className="front">
                    {content.front}
                    <div className='divCheck'>
                        <input className='inputCheck' onChange={(e) => {setResp(e.target.value)}}></input>
                        <button className='btnCheck' onClick={() => {setIsOpened(checkResponse(resp, content.back,user))}}>Send</button>
                          {/* 
                        <button className='btnCheck' onClick={() => {handleAdd()}}>Send</button> */}
                    </div>
                </div>
                <div className="back">
                    {content.back}
                </div>
            </div>
        </div>
    )
}