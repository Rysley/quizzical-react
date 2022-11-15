import React from "react";
import { nanoid } from "nanoid";
import { Interweave } from "interweave";

export default function QuizCard(props) {
  const data = props.question;
  const allAnswers = data.all_answers;

  const answerBtns = allAnswers.map((answer) => {
    let resultStyles;
    const isSelected = answer === data.selected_answer;
    const isCorrect = answer == data.correct_answer;

    if (isSelected && isCorrect) {
      resultStyles = {
        backgroundColor: "green",
      };
    } else if (!isSelected && isCorrect) {
      resultStyles = {
        backgroundColor: "rgba(0, 255, 0, 0.15)",
      };
    } else if (isSelected && !isCorrect) {
      resultStyles = {
        backgroundColor: "red",
      };
    }

    return (
      <div
        className={`quiz__answer-btn btn btn-disabled
         ${!props.isChecked && isSelected ? "quiz__answer-btn--clicked" : null}
            `}
        onClick={props.handleClick}
        key={nanoid()}
        style={props.isChecked ? resultStyles : null}
        id={answer}
      >
        {answer}
      </div>
    );
  });

  return (
    <div className="quiz">
      <h4 className="quiz__question">
        {<Interweave content={data.question} />}
      </h4>
      <div className="quiz__buttons">{answerBtns}</div>
    </div>
  );
}
