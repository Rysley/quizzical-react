import React, { useContext } from "react";
import QuizCard from "./QuizCard";
import QuestionsContext from "../context/questions-context";

export default function Quizzes() {
  const { questions, quizIsChecked, quizForm } = useContext(QuestionsContext);

  const quizCards = questions.map((question) => {
    return (
      <QuizCard
        isChecked={quizIsChecked}
        question={question}
        key={question.id}
        handleClick={(e) => ctx.chooseAnswer(e, question.id)}
      />
    );
  });

  const quizzes = quizForm.isSubmitted ? (
    <section className="quizzes">
      <div className="quizzes__form">{quizCards}</div>
    </section>
  ) : null;

  return <React.Fragment>{quizzes}</React.Fragment>;
}
