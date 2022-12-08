import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import QuestionsContext from "../../context/questions-context";
export default function ConfettiAnimation() {
  const ctx = React.useContext(QuestionsContext);

  const confetti =
    ctx.score.numCorrectAnswers >= 0.6 * ctx.score.totalQuestions
      ? ReactDOM.createPortal(
          <Confetti style={{ zIndex: "100" }} />,
          document.getElementById("overlay-root")
        )
      : null;

  return <React.Fragment>{confetti}</React.Fragment>;
}
