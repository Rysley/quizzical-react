import React from "react";
import { nanoid } from "nanoid";

export default function QuizCard(props) {
  const data = props.question;
  const allAnswers = data.all_answers;

  const answerBtns = allAnswers.map((answer) => {
    return (
      <div
        className="quiz__answer-btn btn"
        /* className={`quiz__answer-btn btn ${
          answer === props.question[id].all_answers ? "quiz__answer-btn--clicked" : ""
        }`} */
        form={props.form}
        onClick={props.handleClick}
        value={answer}
        key={nanoid()}
        id={props.id}
      >
        {answer}
      </div>
    );
  });

  return (
    <div className="quiz">
      <h4 className="quiz__question">{data.question}</h4>
      <div className="quiz__buttons">{answerBtns}</div>
    </div>
  );
}
