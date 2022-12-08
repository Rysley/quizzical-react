import React from "react";
import QuestionsContext from "../context/questions-context";

export default function Panel() {
  const ctx = React.useContext(QuestionsContext);
  const panel = ctx.quizForm.isSubmitted ? (
    <section className="panel">
      {ctx.quizIsComplete && !ctx.quizIsChecked && (
        <div className="panel__check-game btn" onClick={ctx.checkQuiz}>
          Check Answers
        </div>
      )}
      {ctx.quizIsChecked && (
        <span className="panel__result-info">{`You've guessed ${ctx.score.numCorrectAnswers}/${ctx.score.totalQuestions} questions!`}</span>
      )}
      {ctx.quizIsComplete ? (
        <div className="panel__new-game btn" onClick={ctx.newGame}>
          New Game
        </div>
      ) : (
        <div className="panel__restart btn" onClick={ctx.newGame}>
          Restart
        </div>
      )}
    </section>
  ) : null;

  return <React.Fragment>{panel}</React.Fragment>;
}
