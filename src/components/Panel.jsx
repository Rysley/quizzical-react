import React from "react";

export default function Panel(props) {
  return (
    <section className="panel">
      {props.isComplete && !props.isChecked && (
        <div className="panel__new-game btn" onClick={props.handleSubmit}>
          Check Answers
        </div>
      )}
      {props.isChecked && (
        <span className="panel__new-game pane__result-info">{`You've guessed ${props.score.numCorrectAnswers}/${props.score.totalQuestions} questions!`}</span>
      )}
      <div className="panel__new-game btn" onClick={props.handleNewGame}>
        {props.isComplete ? "New Game" : "Restart"}
      </div>
    </section>
  );
}
