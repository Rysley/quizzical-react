import React from "react";

export default function Panel(props) {
  return (
    <section className="panel">
      {props.isComplete && (
        <div className="panel__new-game btn" onClick={props.handleSubmit}>
          Check Answers
        </div>
      )}
      <div className="panel__new-game btn" onClick={props.handleNewGame}>
        {props.isComplete ? "New Game" : "Restart"}
      </div>
    </section>
  );
}
