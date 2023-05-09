import { createContext, useState } from "react"


const TodoContext = createContext({})

const TodoProvider = ({children}) =>{

    const [produtos, setProdutos] = useState([
        {nome: 'Estudar React', realizado: false},
        {nome: 'Estudar Node', realizado: false},
        {nome: 'Estudar Js', realizado: false},
      ])
    
    const handleClick = (tarefa) =>{
        setProdutos([...produtos,{nome: tarefa, realizado: false}])
      }

    return(
        <TodoContext.Provider value={{produtos, handleClick}}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}