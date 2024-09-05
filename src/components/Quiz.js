import React, { useState, useContext } from 'react';
import { QuestionBank } from '../Helpers/QuestionsBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { setGameState, score, setScore } = useContext(QuizContext);
  const [selectedOption, setSelectedOption] = useState("");

  function finishQuiz() {
    if (selectedOption === QuestionBank[currentQuestion].answer) {
      setScore(score + 5);
    }
    setGameState("EndScreen");
  }

  function nextQuestion() {
    if (selectedOption === QuestionBank[currentQuestion].answer) {
      setScore(score + 5);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(""); // Réinitialiser l'option sélectionnée
  }

  function optionClicked(option) {
    setSelectedOption(option);
  }

  return (
    <div>
      <div className='header'>
        <h1>MC Quiz</h1>
        <h2>HTML & CSS Basics MCQ's</h2>
      </div>

      <div className='Quiz'>
        <p>{QuestionBank[currentQuestion].question}</p>
        <button
          className={`question ${selectedOption === "option1" ? "selected" : ""}`}
          onClick={() => optionClicked("option1")}
        >
          {QuestionBank[currentQuestion].option1}
        </button>
        <button
          className={`question ${selectedOption === "option2" ? "selected" : ""}`}
          onClick={() => optionClicked("option2")}
        >
          {QuestionBank[currentQuestion].option2}
        </button>
        <button
          className={`question ${selectedOption === "option3" ? "selected" : ""}`}
          onClick={() => optionClicked("option3")}
        >
          {QuestionBank[currentQuestion].option3}
        </button>
        <button
          className={`question ${selectedOption === "option4" ? "selected" : ""}`}
          onClick={() => optionClicked("option4")}
        >
          {QuestionBank[currentQuestion].option4}
        </button>

        <div className='footer'>
          <div className='butt'>
            {currentQuestion === QuestionBank.length - 1 ? (
              <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
              <button onClick={nextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
