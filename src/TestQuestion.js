import {useState} from "react";

export default function TestQuestion(props) {
    const [userAnswer, setUserAnswer] = useState(0);

    return(
        <div>
            {props.questions.map((el, index) =>
                <div key={index}>{index + 1} ) {el.firstNumber} {el.operation} {el.secondNumber} = {el.userAnswers}
                    {el.userAnswers === undefined &&
                        <>
                    <input type={"number"} value={userAnswer} onChange={(event) => setUserAnswer(Number(event.target.value))}/>
                    <button onClick={() => {props.saveUserAnswers(userAnswer, index); setUserAnswer('')}}>OK</button>
                    </>}
                    {props.questions.length < props.testQuestionsAmount && <button onClick={props.startTest} disabled={el.userAnswers === undefined && props}>NEXT</button>}
                </div>)}
        </div>
    )
}