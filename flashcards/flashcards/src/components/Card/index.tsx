import { useContext, useState } from 'react'
import './style.css'
import { GameContext } from '../../context/game'
import { UserContext } from '../../context/user'

export default function Card({ content }: any) {

    const [isOpened, setIsOpened] = useState(false)
    const [resp, setResp] = useState()

    const {checkResponse}: any = useContext(GameContext)
    const {user}: any = useContext(UserContext)
    
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
                        <input className='inputCheck' onChange={(e: any) => {setResp(e.target.value)}}></input>
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