import styles from './Game.module.css'
import Card from '../../components/Card'
import Xp from '../../components/Xp'
import { useContext, useEffect, useState } from 'react'

import firebaseApp from '../../services/firebase'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { GameContext } from '../../context/game'
import { UserContext } from '../../context/user'
import { Link } from 'react-router-dom'

const Game = () => {

    const [cards, setCards] = useState<any>([]);

    const {point}: any = useContext(GameContext)
    const {signOut}: any = useContext(UserContext)

    useEffect(()=>{

        const q = query(collection(db, 'cards'))

        onSnapshot(q, (querySnapshot)=>{
            const aux: any = []
            querySnapshot.forEach((doc:any) =>{
                /* console.log(doc.id,doc.data) */
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })
            
            })
            setCards([...aux])
        })
    }, [])

    const db = getFirestore(firebaseApp)

    return (
        <>
            <div id={styles.containerTopo}>
                <div className={styles.titulo}>FlashCard Challenge</div>
                <Xp total={point} />
                <div className='buttonsDiv'>
                    <button className='' onClick={() => signOut()}>Logout</button>
                    <Link to='/dashboard'> <button>Dashboard</button></Link>
                </div>
            </div>
            <div id="container-cards">
                {cards.map((getCard: any) =><Card content={getCard as any}/>)}
            </div>
        </>
    )
}

export default Game