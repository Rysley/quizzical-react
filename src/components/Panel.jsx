import React from "react";

export default function Panel(props) {
  return (
    <section className="panel">
      {props.isComplete && !props.isChecked && (
        <div className="panel__check-game btn" onClick={props.handleSubmit}>
          Check Answers
        </div>
      )}
      {props.isChecked && (
        <span className="panel__result-info">{`You've guessed ${props.score.numCorrectAnswers}/${props.score.totalQuestions} questions!`}</span>
      )}
      {props.isComplete ? (
        <div className="panel__new-game btn" onClick={props.handleNewGame}>
          New Game
        </div>
      ) : (
        <div className="panel__restart btn" onClick={props.handleNewGame}>
          Restart
        </div>
      )}
    </section>
  );
}
