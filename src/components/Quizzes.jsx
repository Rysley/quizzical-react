import React from "react";

export default function Quizzes() {
  return (
    <section className="quizzes">
      <form className="quizzes__form">
        <div className="quiz">
          <h4 className="quiz__question">
            How would you say goobye in Spanish?
          </h4>
          <div className="quiz__buttons">
            <div className="quiz__answer-btn btn">Adios</div>
            <div className="quiz__answer-btn btn">Bye Bye</div>
            <div className="quiz__answer-btn btn">Pa Pa</div>
            <div className="quiz__answer-btn btn">Arivederci</div>
          </div>
        </div>
      </form>
    </section>
  );
}
