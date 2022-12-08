import React, { useContext } from "react";
import QuestionsContext from "../context/questions-context";

export default function Panel() {
  const { quizIsComplete, quizIsChecked, score, newGame, quizForm, checkQuiz } =
    useContext(QuestionsContext);

  const panel = quizForm.isSubmitted ? (
    <section className="panel">
      {quizIsComplete && !quizIsChecked && (
        <div className="panel__check-game btn" onClick={checkQuiz}>
          Check Answers
        </div>
      )}
      {quizIsChecked && (
        <span className="panel__result-info">{`You've guessed ${score.numCorrectAnswers}/${score.totalQuestions} questions!`}</span>
      )}
      {quizIsComplete ? (
        <div className="panel__new-game btn" onClick={newGame}>
          New Game
        </div>
      ) : (
        <div className="panel__restart btn" onClick={newGame}>
          Restart
        </div>
      )}
    </section>
  ) : null;

  return <React.Fragment>{panel}</React.Fragment>;
}
