import { useContext } from 'react'
import './style.css'
import { TodoContext } from '../../context/Todo'

const Counter = () =>{

    const {produtos, handleClick} = useContext(TodoContext)
    return (
        <div className='containerCounter'>{produtos.lenght}</div>
    )
}

export default Counter