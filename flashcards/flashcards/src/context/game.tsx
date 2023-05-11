import { createContext, useEffect, useState } from "react";


const GameContext = createContext({})

const GameProvider = ({children}) =>{

    return (
        <GameContext.Provider value={{}}>
            {children}
        </GameContext.Provider>
    )
}
export {GameContext, GameProvider}