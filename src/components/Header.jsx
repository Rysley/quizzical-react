import { useContext } from "react";
import donut from "../assets/donut.svg";
import QuestionsContext from "../context/questions-context";

export default function Header() {
  const { quizForm, backToMenu } = useContext(QuestionsContext);

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
      {quizForm.isSubmitted && (
        <button className="header__btn-menu" onClick={backToMenu}>
          &#9776;
        </button>
      )}

      <h1 className="header__title">Trivia Quizz</h1>
      <img
        className="header__logo header__logo-left"
        src={donut}
        alt="donut"
        style={quizForm.isSubmitted ? styles_left : styles_none}
      />
    </header>
  );
}
