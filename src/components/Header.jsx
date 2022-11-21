import React from "react";
import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
      <h1 className="header__title">Trivia Quizz</h1>
      <img src={logo} alt="react" style={{ marginLeft: "2rem" }} />
    </header>
  );
}
