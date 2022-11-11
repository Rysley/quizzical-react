import React from "react";
import QuizCard from "./QuizCard";

export default function Quizzes(props) {
  const questionsArr = props.questions;

  return (
    <section className="quizzes">
      <form className="quizzes__form">
        {questionsArr.map((question) => {
          return <QuizCard question={question} />;
        })}
      </form>
    </section>
  );
}
