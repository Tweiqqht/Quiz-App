import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the largest ocean on Earth?',
    options: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
      { answerText: 'Arctic Ocean', isCorrect: false },
    ],
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    options: [
      { answerText: 'Vincent van Gogh', isCorrect: false },
      { answerText: 'Leonardo da Vinci', isCorrect: true },
      { answerText: 'Pablo Picasso', isCorrect: false },
      { answerText: 'Claude Monet', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest prime number?',
    options: [
      { answerText: '0', isCorrect: false },
      { answerText: '1', isCorrect: false },
      { answerText: '2', isCorrect: true },
      { answerText: '3', isCorrect: false },
    ],
  },
  {
    questionText: 'Which gas do plants absorb from the atmosphere?',
    options: [
      { answerText: 'Oxygen', isCorrect: false },
      { answerText: 'Carbon Dioxide', isCorrect: true },
      { answerText: 'Nitrogen', isCorrect: false },
      { answerText: 'Hydrogen', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the tallest mountain in the world?',
    options: [
      { answerText: 'K2', isCorrect: false },
      { answerText: 'Mount Everest', isCorrect: true },
      { answerText: 'Kangchenjunga', isCorrect: false },
      { answerText: 'Lhotse', isCorrect: false },
    ],
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerResults, setAnswerResults] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const result = {
      isCorrect: isCorrect
    };
    setAnswerResults([...answerResults, result]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswerResults([]);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Quiz Application</h1>
      </div>
      <div className="container">
        {showResult ? (
          <div className="result">
            <h2>Your Score: {score} out of {questions.length}</h2>
            <ul>
              {answerResults.map((result, index) => (
                <li
                  key={index}
                  className={result.isCorrect ? 'correct' : 'wrong'}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
            <button onClick={handleRestartQuiz}>Retake Quiz</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
