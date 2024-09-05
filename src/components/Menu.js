import React from 'react'
import { useContext } from 'react'
import {QuizContext} from '../Helpers/Contexts'

function Menu(){
    const {setGameState}=useContext(QuizContext)

    return (
        <div className='menuContainer'> 
            <div className='header'>
                    <h1>MC quiz</h1>
                    <h2>HTML & CSS Basics MCQ's</h2>
            </div>
            <div className="menu">
                <p>You will get 5 point for each correct answer . At the end of the Quiz , you total score will be displayed. Maximum score is 25 point.</p>
                <button onClick={()=>setGameState("Quiz")}>Start the quiz</button>
            </div>
        </div>
    )
}

export default Menu