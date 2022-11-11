import React from "react";
import QuizCard from "./QuizCard";
import { nanoid } from "nanoid";

export default function Quizzes(props) {
  const questionsArr = props.questions;

  const quizCards = questionsArr.map((question, i) => {
    return (
      <QuizCard
        question={question}
        id={i}
        key={nanoid()}
        handleClick={props.handleClick}
      />
    );
  });

  return (
    <section className="quizzes">
      <form className="quizzes__form">{quizCards}</form>
    </section>
  );
}
