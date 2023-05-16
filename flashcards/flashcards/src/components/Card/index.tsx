import { useContext, useState } from 'react'
import './style.css'
import { GameContext } from '../../context/game'

export default function Card({ content }) {

    const [isOpened, setIsOpened] = useState(false)
    const [resp, setResp] = useState()

    const {point, checkResponse} = useContext(GameContext)

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
                        <button className='btnCheck' onClick={() => {setIsOpened(checkResponse(resp, content.back))}}>Send</button>
                    </div>
                </div>
                <div className="back">
                    {content.back}
                </div>
            </div>
        </div>
    )
}