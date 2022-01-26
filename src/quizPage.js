import React, { useEffect, useState } from 'react';
// import questions from './quiz';



export default function QuizApp() {

    const [data, setData] = useState([]);
    const [localData, setLocalData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [color, setColor] = useState(0);
    const [_color, set_Color] = useState('')
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState('');

    const questions = JSON.parse(localStorage.getItem("quizApp"))
    
    useEffect(() => {
        setData(questions);
        setLocalData(questions)
        localStorage.setItem("quizQuestions", JSON.stringify(data));
    }, [score, showScore])

    useEffect(() => {

    }, [color, _color, selected])
    const [number, setnumber] = useState(5);

    const handleAnswerOptionClick = (isCorrect, index) => {
        console.log(isCorrect, 'iscorrect', index)
      
        if (isCorrect  == 1) {
            setScore(score + 1);
            set_Color('rowButton MuiButton-outlinedPrimary correctColor')
            setColor(1)
            setnumber(index)
        } else {
            setColor(1)
            setnumber(index)
            set_Color('rowButton MuiButton-outlinedPrimary color')
        }
       
        setTimeout(() => {
            setColor(0)
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setSelected();
                setShowScore(true);
            }
        }, 1000)

    };


    function replayButton() {
        setScore(0)
        setCurrentQuestion(0)
        setShowScore(false)
    }

    return (
        <div className='App'>

            {showScore ? (
                <>
                    <div className='question-container'>
                        <div className='padding'>
                            {score < 4 ? (<>
                                <span className='App-header'> You scored </span>
                                <br />
                                <span className='App-header'> {score} / {questions.length}</span>
                                <br />
                                <span className='App-header'>Are You Kidding Me?</span>
                            </>) : (<>
                                <span className='App-header'> You scored </span>
                                <br />
                                <span className='App-header'> {score} / {questions.length}</span>
                                <br />
                                <span className='App-header'> Not Bad, Not Bad</span>
                            </>)}
                            <br />
                            <button onClick={replayButton} className='rowButton MuiButton-outlinedPrimary'>REPLAY!</button>
                        </div>
                    </div>
                </>
            ) : (<>
                <div className='App-header'>
                    <span className='App-header1'>Question {currentQuestion + 1}/{questions.length}</span>
                </div>
                <div className='question-container'>
                    <span className='question-text'>{questions[currentQuestion].questionText}</span>
                </div>
                <div className='answers-container'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button key={index}
                            className={number === index && color==1  ? _color : 'rowButton MuiButton-outlinedPrimary'}
                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}>{answerOption.answerText}</button>

                    ))}
                </div>
            </>)}

            {/* {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questionsData.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questionsData.length}
						</div>
						<div className='question-text'>{questionsData[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questionsData[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)} */}
        </div>

    );
}





















// import React, { useEffect, useState } from 'react';
// import questions from './quiz';
// // import Col from 'react-bootstrap/Col';
// // import Row from 'react-bootstrap/Row';
// // import Container from 'react-bootstrap/Row';
// // import Button from 'react-bootstrap/Row';
// // import { FormGroup } from 'react-bootstrap';


// export default function QuizApp() {

//     const [data, setData] = useState([]);
//     const [localData, setLocalData] = useState([]);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [color, setColor] = useState(false);
//     const [score, setScore] = useState(0);

//     const local = localStorage.setItem("quiz", JSON.stringify(localData))
//     const get = JSON.parse(localStorage.getItem("quiz"))

//     console.log(localData, 'localData', get)

//     const record = JSON.parse(localStorage.getItem("quizQuestions"))
//     const [questionsData, setQuestionsData] = useState(record || [])

//     useEffect(() => {
//         console.log('gggg kk ppp', questions);
//         setData(questions);
//         setLocalData(questions)
//         localStorage.setItem("quizQuestions", JSON.stringify(data));
//         console.log(score, 'score')
//     }, [score, showScore])

//     const handleAnswerOptionClick = (isCorrect) => {
//         console.log(isCorrect, 'isCorrect')
//         if (isCorrect) {
//             setScore(score + 1);
//             setColor(true)
//         }
//         setColor(false)
//         console.log(color, 'color')
//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             setShowScore(true);
//         }
//     };
//     setTimeout(() => {
//         handleAnswerOptionClick()
//     }, 88000);


//     function replayButton() {
//         console.log('button')
//         setScore(0)
//         setCurrentQuestion(0)
//         setShowScore(false)
//     }

//     return (
//         <div className='App'>

//             {showScore ? (
//                 <>
//                     <div className='question-container'>
//                         <div className='padding'>
//                             {score < 4 ? (<>
//                                 <span className='App-header'> You scored </span>
//                                 <br />
//                                 <span className='App-header'> {score} / {questions.length}</span>
//                                 <br />
//                                 <span className='App-header'>Are You Kidding Me?</span>
//                             </>) : (<>
//                                 <span className='App-header'> You scored </span>
//                                 <br />
//                                 <span className='App-header'> {score} / {questions.length}</span>
//                                 <br />
//                                 <span className='App-header'> Not Bad, Not Bad</span>
//                             </>)}
//                             <br />
//                             <button onClick={replayButton} className='rowButton MuiButton-outlinedPrimary'>REPLAY!</button>
//                         </div>
//                     </div>
//                 </>
//             ) : (<>
//                 <div className='App-header'>
//                     <span className='App-header1'>Question {currentQuestion + 1}/{questions.length}</span>
//                 </div>
//                 <div className='question-container'>
//                     <span className='question-text'>{questions[currentQuestion].questionText}</span>
//                 </div>
//                 <div className='answers-container'>
//                     {questions[currentQuestion].answerOptions.map((answerOption) => (
//                         <button
//                             //   style={{
//                             // 	backgroundColor: answerOption.isCorrect == true ? "green" : ""
//                             // }}
//                             className={answerOption.isCorrect == true && color ? 'rowButton MuiButton-outlinedPrimary correctColor' : 'rowButton MuiButton-outlinedPrimary'}
//                             onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
//                     ))}
//                 </div>
//             </>)}


//             {/* {showScore ? (
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
//         </div>

//     );
// }
