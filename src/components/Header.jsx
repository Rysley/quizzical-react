import React from "react";
import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
      <span>Trivia Quizz</span>
      <img src={logo} alt="react" style={{ marginLeft: "2rem" }} />
    </header>
  );
}
