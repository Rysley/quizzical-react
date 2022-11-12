import React from "react";

export default function Panel(props) {
  return (
    <section className="panel">
      {props.formIsComplete && (
        <div className="panel__new-game btn" onClick={props.handleSubmit}>
          Check Answers
        </div>
      )}
      <div className="panel__new-game btn" onClick={props.handleNewGame}>
        {props.formIsComplete ? "New Game" : "Restart"}
      </div>
    </section>
  );
}
