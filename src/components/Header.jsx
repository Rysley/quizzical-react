import React from "react";
import donut from "../assets/donut.svg";

export default function Header(props) {
  const styles_left = {
    opacity: "1",
    marginLeft: "0.14rem",
  };

  const styles_none = {
    opacity: "0",
    transform: "scale(1.3)",
  };

  return (
    <header className="header">
      {props.isSubmitted && (
        <button className="header__btn-menu" onClick={props.handleMenu}>
          &#9776;
        </button>
      )}

      <h1 className="header__title">Trivia Quizz</h1>
      <img
        className="header__logo header__logo-left"
        src={donut}
        alt="donut"
        style={props.isSubmitted ? styles_left : styles_none}
      />
    </header>
  );
}
