import styles from './Game.module.css'
import Card from '../../components/Card'
import Xp from '../../components/Xp'
import { useContext, useEffect, useState } from 'react'

import firebaseApp from '../../services/firebase'

import { getFirestore,addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'
import { GameContext } from '../../context/game'

const Game = () => {

/*     const [cards, setCards] = useState([
        {
            front: "Gato",
            back: "Cat"
        },
        {
            front: "Vaca",
            back: "Cow"
        },
        {
            front: "Cachorro",
            back: "Dog"
        }
    ]) */

    const [card, setCard] = useState();
    const [cards, setCards] = useState<any>([]);

    const {point} = useContext(GameContext)

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

    const handleAdd = async function(){

        const message_json = {
            cards,
        }

        const docref = await addDoc(collection(db,'cards'), message_json)
       /*  console.log(docref)  */
        
    }


    return (
        <>
            <div id={styles.containerTopo}>
                <div className={styles.titulo}>FlashCard Challenge</div>
                <Xp total={point} />
            </div>
            <div id="container-cards">
                {/* {cards.map((card => <Card content={card} />))} */}
                {cards.map(getCard =><Card content={getCard}/>)}
            </div>
        </>
    )
}

export default Game