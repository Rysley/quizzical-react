import React from "react";
import { nanoid } from "nanoid";

export default function QuizCard(props) {
  const data = props.question;
  const allAnswers = data.all_answers;

  const styles = {
    correct: { backgroundColor: "#3dd13d" },
    wrong: { backgroundColor: "#eb8d8d " },
    none: { color: "" },
  };

  const answerBtns = allAnswers.map((answer) => {
    return (
      <div
        className={`quiz__answer-btn btn
         ${
           answer === props.question.selected_answer && !props.isChecked
             ? "quiz__answer-btn--clicked"
             : ""
         }
            `}
        onClick={props.handleClick}
        key={nanoid()}
        style={
          props.isChecked &&
          answer === props.question.selected_answer &&
          answer === props.question.correct_answer
            ? styles.correct
            : styles.none &&
              props.isChecked &&
              answer === props.question.selected_answer &&
              answer !== props.question.correct_answer
            ? styles.wrong
            : styles.none
        }
        id={answer}
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
