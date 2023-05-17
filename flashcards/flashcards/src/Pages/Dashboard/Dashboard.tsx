import { Link } from 'react-router-dom'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import firebaseApp from '../../services/firebase'
import { getFirestore,addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import { GameContext } from '../../context/game'

const Dashboard = () => {

    const {signOut, user}: any = useContext(UserContext)
    const {getPoints, point}: any = useContext(GameContext)

    const [message, setMessage] = useState();
    const [messages, setMessages] = useState<any>([]);

    useEffect(()=>{

        const q = query(collection(db, 'messages'))

        onSnapshot(q, (querySnapshot)=>{
            const aux: any = []
            querySnapshot.forEach((doc:any) =>{
                /* console.log(doc.id, doc.data) */
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })
            
            })
            setMessages([...aux])
        })

       /*  const getMessagesDB = async () =>{
            const docs = await getDocs(collection(db,"messages"))
            const aux: any = []
            docs.forEach((doc:any) =>{
                console.log(doc.id, doc.data)
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setMessages([...aux])
        } */

       /*  getMessagesDB() */
    }, [])

    const db = getFirestore(firebaseApp)

    const handleAdd = async function(){
         
        const message_json = {
            message,
            email: user.email
        }

        await addDoc(collection(db,'messages'), message_json)
        /* setMessages([...messages, message_json]) */
        
    }

    

    return (
        <div className='container'>
            <div className='top'>
                <span className='title'>Dashboard</span>
                <div className='userDiv'>
                    <p className='userInformation'>User: <span className='user'>{user.email}</span></p>
                    <p className='userInformation'>Points: <span className='user'>{point}xp</span></p>
                </div>
                <button className='btnDeslogar' onClick={() => signOut()}>Logout</button>
            </div>
            


            <div className='jogar'>
                    <Link className='jogarLink' to="/game" onClick={() => getPoints(user)}>PLAY!</Link>
                <span className='howToPlay'>Responda em inglês os nomes escritos nos cards</span>
            </div>
            <div className='containerMessage'>
                <div className='messageBox'>
                    {messages.map((m: any)=>(
                        <div>
                            <p>{m.email}</p>
                            <span>{m.message}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <input className='inputMessage' type='text' onChange={(e: any) => {setMessage(e.target.value)}}></input>
                <button className='btnMessage' onClick={() => handleAdd()}>Send</button>
            </div>

        </div>
    )
}

export default Dashboard