import React from "react";
import { nanoid } from "nanoid";
import parse from "html-react-parser";

export default function QuizCard(props) {
  const data = props.question;
  const allAnswers = data.all_answers;

  const answerBtns = allAnswers.map((answer) => {
    let resultStyles;

    const isSelected = answer.id === data.selected_answer;
    const isCorrect = answer.id === data.correct_answer;

    if (isSelected && isCorrect) {
      resultStyles = {
        backgroundColor: "#73e273d0",
      };
    } else if (!isSelected && isCorrect) {
      resultStyles = {
        outline: "#73e273d0 dashed 5px",
        outlineOffset: `4px`,
      };
    } else if (isSelected && !isCorrect) {
      resultStyles = {
        backgroundColor: "#eb8d8d",
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
        id={answer.id}
      >
        {parse(answer.answer)}
      </div>
    );
  });

  return (
    <div className="quiz" id={props.id}>
      <h4 className="quiz__question">{parse(data.question)}</h4>
      <div className="quiz__buttons">{answerBtns}</div>
    </div>
  );
}
