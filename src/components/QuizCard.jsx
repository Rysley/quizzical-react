import React from "react";

export default function QuizCard(props) {
  const data = props.question;
  const incorrectAnswers = data.incorrect_answers;
  const correctAnswer = [data.correct_answer];
  const allAnswers = incorrectAnswers.concat(correctAnswer);
  console.log(allAnswers);
  const Cards = allAnswers.map((answer) => {
    return (
      <div className="quiz__answer-btn btn" onClick={props.handleClick}>
        {answer}
      </div>
    );
  });

  return (
    <div className="quiz">
      <h4 className="quiz__question">{data.question}</h4>
      <div className="quiz__buttons">{Cards}</div>
    </div>
  );
}