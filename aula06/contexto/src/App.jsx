import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Tod'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Contexto</h1>
    <Todo/>
    <Counter/>
    </>
  )
}

export default App
