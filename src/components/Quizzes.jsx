import React from "react";
import QuizCard from "./QuizCard";
import QuestionsContext from "../context/questions-context";

export default function Quizzes() {
  const ctx = React.useContext(QuestionsContext);

  const quizCards = ctx.questions.map((question) => {
    return (
      <QuizCard
        isChecked={ctx.quizIsChecked}
        question={question}
        key={question.id}
        handleClick={(e) => ctx.chooseAnswer(e, question.id)}
      />
    );
  });

  return (
    <section className="quizzes">
      <div className="quizzes__form">{quizCards}</div>
    </section>
  );
}
