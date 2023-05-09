import React, { useState } from 'react'
import './style.css'

export default function Todo() {

  const [produtos, setProdutos] = useState([
    {nome: 'Estudar React', realizado: false},
    {nome: 'Estudar Node', realizado: false}
  ])

  const handleClick = () =>{
    setProdutos([...produtos,{nome: 'fazer cafe', realizado: false}])
  }

  return (
    <div>
      <div className='containerTodo'>
        <div onClick={()=>handleClick()}>Todo</div>
        {produtos.map(produto => <p>{produto.nome}</p>)}
      </div>
    </div>
  )
}
