import React,{useState} from 'react'
import './App.css'
import Quiz from './components/Quiz'
import EndScreen from './components/EndSceen'
import Menu from './components/Menu'
import { useContext } from 'react'
import {QuizContext} from './Helpers/Contexts'

function App(){
    const [gameState,setGameState]=useState("menu")
    const [score,setScore]=useState(0)
    return (
        <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
            <div className='App'>
                {gameState === "menu" && <Menu/>}
                {gameState === "Quiz" && <Quiz/>}
                {gameState === "EndScreen" && <EndScreen/>}
            </div>
        </QuizContext.Provider>
    )
}

export default App