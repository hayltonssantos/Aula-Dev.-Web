import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <h1>Contexto</h1>
    <Todo/>
    <Counter/>
    </>
  )
}

export default App
