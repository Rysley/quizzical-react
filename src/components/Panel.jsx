import React from "react";

export default function Panel(props) {
  return (
    <section className="panel">
      <div className="panel__new-game btn">Check Answers</div>
      <div className="panel__new-game btn" onClick={props.handleNewGame}>
        New Game
      </div>
    </section>
  );
}
