import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { QuestionBank } from '../Helpers/QuestionsBank'

function EndScreen(){
    const {score,setScore,setGameState}=useContext(QuizContext)
    function restartQuiz(){
        setScore(0)
        setGameState("menu")
    }
    return(
        <div className='resPage'>
            <p>Marks: {score} / {5*QuestionBank.length}</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen