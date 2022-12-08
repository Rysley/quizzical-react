import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import QuizCard from "./components/QuizCard";
import Panel from "./components/Panel";
import Confetti from "react-confetti";
import LoadingSpinner from "./assets/SpinnerCircular";
import QuestionsContext from "./context/questions-context";

function App() {
  const ctx = React.useContext(QuestionsContext);

  const quizCards = ctx.questions.map((question) => {
    return (
      <QuizCard
        isChecked={ctx.quizIsChecked}
        question={question}
        key={question.id}
        handleClick={(e) => ctx.chooseAnswer(e, question.id)}
      />
    );
  });

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
      {ctx.score.numCorrectAnswers >= 0.6 * ctx.score.totalQuestions ? (
        <Confetti style={{ zIndex: "100" }} />
      ) : null}
      {ctx.quizForm.isSubmitted && (
        <section className="quizzes">
          <div className="quizzes__form">{quizCards}</div>
        </section>
      )}
      {ctx.quizForm.isSubmitted && (
        <Panel
          isComplete={ctx.quizIsComplete}
          isChecked={ctx.quizIsChecked}
          score={ctx.score}
          handleNewGame={() => ctx.newGame()}
          handleSubmit={() => ctx.checkQuiz()}
        />
      )}
    </React.Fragment>
  );
}

export default App;
