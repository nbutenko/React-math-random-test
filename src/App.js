import './App.css';
import Header from "./Header";
import TestQuestion from "./TestQuestion";
import {useState} from 'react';


function App() {
  // eslint-disable-next-line no-undef
  const [question, setQuestion] = useState([]);
  const testQuestionsAmount = 3;
  const [result, setResult] = useState(null);

  const startTest = () => {
    const firstNumber = Math.floor(Math.random()*10);
    const secondNumber = Math.floor(Math.random()*10);
    const operationSymbols = ['+', '-', '*', '/'];
    const operation = operationSymbols[Math.floor(Math.random()*operationSymbols.length)];
    const tempArr = [...question, {firstNumber, secondNumber, operation}];
    setQuestion(tempArr);
  }

  const calculateRightAnswer = (lastQuestion) => {
      return eval(lastQuestion.firstNumber + lastQuestion.operation + lastQuestion.secondNumber);

  }

  const saveUserAnswers = (userAnswers, index) => {
      const rightAnswer = calculateRightAnswer(question[question.length-1]);
      const tempArr = question.map((el, i) => {return (index === i) ? {...el, userAnswers, rightAnswer} : el});
      setQuestion(tempArr);
      console.log(tempArr.length);
      console.log(testQuestionsAmount);
  }

  const setResults = () => {
      const data = question.map(el => el.userAnswers === el.rightAnswer ? 1 : 0)
      const tempResult = data.reduce((acc, curr) => acc + curr, 0);
      setResult(tempResult);
  }


  return (
    <div className="App">
      <Header />
      <button disabled={question.length === 0 ? false : true} onClick={startTest}>Start test</button>
      <TestQuestion questions={question} startTest={startTest} saveUserAnswers={saveUserAnswers} testQuestionsAmount={testQuestionsAmount}/>
        {question.length === testQuestionsAmount && question[testQuestionsAmount-1].userAnswers !== undefined && <button onClick={setResults}>Calculate results</button>}
        {result !== null && <p>Right answers: {result} out of {testQuestionsAmount} <button onClick={() => {setQuestion([]); setResult(null)}}>Start again</button></p>}

    </div>
  );
}

export default App;
