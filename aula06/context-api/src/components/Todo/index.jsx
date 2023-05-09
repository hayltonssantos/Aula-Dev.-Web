import React, { useContext } from 'react'
import './style.css'
import { TodoContext } from '../../context/Todo'

export default function Todo() {

  const {produtos, handleClick} = useContext(TodoContext)

  return (
    <div>
      <div className='containerTodo'>
      <div onClick={()=>handleClick('tarefa')}>Todo</div>
        {produtos.map(produto => <p>{produto.nome}</p>)}
      </div>
    </div>
  )
}
