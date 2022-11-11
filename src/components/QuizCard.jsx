import React from "react";

export default function QuizCard(props) {
  const data = props.question;
  const incorrectAnswers = data.incorrect_answers;
  const correctAnswer = [data.correct_answer];
  const allAnswers = incorrectAnswers.concat(correctAnswer);
  console.log(allAnswers);

  return (
    <div className="quiz">
      <h4 className="quiz__question">{data.question}</h4>
      <div className="quiz__buttons">
        <div className="quiz__answer-btn btn">Adios</div>
        <div className="quiz__answer-btn btn">Bye Bye</div>
        <div className="quiz__answer-btn btn">Pa Pa</div>
        <div className="quiz__answer-btn btn">Arivederci</div>
      </div>
    </div>
  );
}
