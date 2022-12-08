import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Panel from "./components/Panel";
import ConfettiAnimation from "./components/animations/ConfettiAnimation";
import LoadingSpinner from "./assets/SpinnerCircular";
import QuestionsContext from "./context/questions-context";

function App() {
  const ctx = React.useContext(QuestionsContext);

  const spinner = ReactDOM.createPortal(
    <LoadingSpinner enabled={ctx.isLoading} />,
    document.getElementById("overlay-root")
  );

  return (
    <React.Fragment>
      {spinner}
      <Header
        handleMenu={ctx.backToMenu}
        isSubmitted={ctx.quizForm.isSubmitted}
      />

      {!ctx.quizForm.isSubmitted ? (
        <Welcome handleStartQuiz={(formData) => ctx.newGame(formData)} />
      ) : (
        <small className="header__small">
          answer at least 60% questions to win
        </small>
      )}
      <ConfettiAnimation />
      {ctx.quizForm.isSubmitted && <Quizzes />}
      {ctx.quizForm.isSubmitted && <Panel />}
    </React.Fragment>
  );
}

export default App;
