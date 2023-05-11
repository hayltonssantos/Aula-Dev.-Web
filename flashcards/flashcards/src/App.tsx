import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import Game from './pages/Game'
import Dashboard from './pages/Dashboard'

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { UserProvider } from './context/user'
import SingUp from './Pages/SingUp/SingUp'
import { GameProvider } from './context/game'

function App() {

  return (
    <>
    <GameProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='singup' element={<SingUp />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='game' element={<Game />} />
            </Route>


            <Route path='/' element={<Navigate to={'/login'} />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </GameProvider>


      {/* <Login />
      <Game />
      <Dashboard /> */}
    </>
  )
}

export default App
