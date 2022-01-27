import React, { useEffect, useState } from 'react';
import QuizApp from './quizPage';
import questions from './quiz';


export default function App(){

	const [play,setPlay] = useState(false)
	const [playrandom,setPlayRandom] = useState([])
	useEffect(()=>{
		localStorage.setItem("quizApp", JSON.stringify(questions))
		const allquestions = JSON.parse(localStorage.getItem("quizApp"));
		const questionsq = allquestions.sort(() => Math.random() - Math.random()).slice(0, 10) || [];
		console.log(questionsq,'app file')
		localStorage.setItem("randomQuiz", JSON.stringify(questionsq))

	},[])


	function playButton() {
		console.log('playButton');
		setPlay(true)
	}

	return(
		<>
		 {/* <> <div className='question-container2'><h5 className='App-header2'>~</h5></div> */}
		<div className='div'>
			{play ? (<>
			<QuizApp/>
			</>) : (
				<>
				<div>
				<h4 style={{color:'black'}}>10-QUESTION QUIZ</h4>
				<div className='button-div'>
				<button className='button' onClick={playButton}>PLAY!</button>
				</div>
				{/* <Button>hh</Button> */}
				</div>
				</>
			)}
			
		</div>
			</>
	)
}


// import React, { useEffect, useState } from 'react';
// import questions from './quiz';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Row';
// import { FormGroup } from 'react-bootstrap';


// export default function App() {

// 	const [data, setData] = useState([]);
// 	const [localData, setLocalData] = useState([]);
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
// 	const [color, setColor] = useState(false);
// 	const [play, setPlay] = useState(true);
// 	const [score, setScore] = useState(0);

// 	const local = localStorage.setItem("quiz", JSON.stringify(localData))
// 	const get = JSON.parse(localStorage.getItem("quiz"))

// 	console.log(localData, 'localData', get)

// 	const record = JSON.parse(localStorage.getItem("quizQuestions"))
// 	const [questionsData, setQuestionsData] = useState(record || [])

// 	useEffect(() => {
// 		console.log('gggg kk ppp', questions);
// 		setData(questions);
// 		setLocalData(questions)
// 		localStorage.setItem("quizQuestions", JSON.stringify(data));
// 	}, [score])

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		console.log(isCorrect, 'isCorrect')
// 		if (isCorrect) {
// 			setScore(score + 1);
// 			setColor(true);
// 		}
// 		setColor(false)
// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};


// 	function replayButton() {
// 		console.log('button')
// 		setScore(0)
// 		setShowScore(false)
// 	}

// 	function playButton() {
// 		console.log('playButton')
// 		setPlay(false)
// 	}


// 	return (
// 		<div className='App'>

// 			{/* {play ? (<>
// 			<div>
// 				<h4 className='question-text'>10-QUESTION QUIZ</h4>
// 			<button onClick={playButton} className='rowButton MuiButton-outlinedPrimary'>Play</button>
// 			</div>
// 			</>) : (
// 				<>
// 				<div className='App-header'>
// 					<span className='App-header'>Question {currentQuestion + 1}</span>/{questions.length}
// 				</div>
// 				<div className='question-container'>
// 					<span className='question-text'>{questions[currentQuestion].questionText}</span>
// 				</div>
// 				<div className='answers-container'>
// 					{questions[currentQuestion].answerOptions.map((answerOption) => (
// 						<button
// 							//   style={{
// 							// 	backgroundColor:  color? "red" : ""'rowButton MuiButton-outlinedPrimary'
// 							// }} 
// 							className={color ? 'rowButton MuiButton-outlinedPrimary color': 'rowButton MuiButton-outlinedPrimary'} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 					))}
// 				</div>
// 				</>
// 			)} */}


// 			{/* {!play ? (<>

// 				<div className='App-header'>
// 					<span className='App-header'>Question {currentQuestion + 1}</span>/{questions.length}
// 				</div>
// 				<div className='question-container'>
// 					<span className='question-text'>{questions[currentQuestion].questionText}</span>
// 				</div>
// 				<div className='answers-container'>
// 					{questions[currentQuestion].answerOptions.map((answerOption) => (
// 						<button
// 							//   style={{
// 							// 	backgroundColor:  color? "red" : ""'rowButton MuiButton-outlinedPrimary'
// 							// }} 
// 							className={color ? 'rowButton MuiButton-outlinedPrimary color': 'rowButton MuiButton-outlinedPrimary'} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 					))}
// 				</div>

// 			</>) : null} */}

// 			{showScore ? (
// 				<>
// 				<div className='question-container'>
// 					<div className='question-text'>
// 						<span className='App-header'> You scored {score} / {questions.length} Are You Kidding Me?</span>
// 						<button onClick={replayButton} className='rowButton MuiButton-outlinedPrimary'>REPLAY!</button>
// 					</div>
// 				</div>
// 				</>
// 			) : (<>
// 				<div className='App-header'>
// 					<span className='App-header'>Question {currentQuestion + 1}</span>/{questions.length}
// 				</div>
// 				<div className='question-container'>
// 					<span className='question-text'>{questions[currentQuestion].questionText}</span>
// 				</div>
// 				<div className='answers-container'>
// 					{questions[currentQuestion].answerOptions.map((answerOption) => (
// 						<button
// 							//   style={{
// 							// 	backgroundColor:  color? "red" : ""'rowButton MuiButton-outlinedPrimary'
// 							// }} 
// 							className={color ? 'rowButton MuiButton-outlinedPrimary color': 'rowButton MuiButton-outlinedPrimary'} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 					))}
// 				</div>
// 			</>)}





// 			{/* {showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questionsData.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questionsData.length}
// 						</div>
// 						<div className='question-text'>{questionsData[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questionsData[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)} */}
// 		</div>
// 		// <div className='app'>
// 		// 	{showScore ? (
// 		// 		<div className='score-section'>
// 		// 			You scored {score} out of {questionsData.length}
// 		// 		</div>
// 		// 	) : (
// 		// 		<>
// 		// 			<div className='question-section'>
// 		// 				<div className='question-count'>
// 		// 					<span>Question {currentQuestion + 1}</span>/{questionsData.length}
// 		// 				</div>
// 		// 				<div className='question-text'>{questionsData[currentQuestion].questionText}</div>
// 		// 			</div>
// 		// 			<div className='answer-section'>
// 		// 				{questionsData[currentQuestion].answerOptions.map((answerOption) => (
// 		// 					<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 		// 				))}
// 		// 			</div>
// 		// 		</>
// 		// 	)}
// 		// </div>
// 	);
// }
