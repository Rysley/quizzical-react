import { useEffect, useState } from "react";
import Header from "./components/Header";
import QuizCard from "./components/QuizCard";
import Panel from "./components/Panel";
import { nanoid } from "nanoid";

function App() {
  const [gameCount, setGameCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [quizIsComplete, setQuizIsComplete] = useState(false);
  const [quizIsChecked, setQuizIsChecked] = useState(false);

  useEffect(() => {
    setQuizIsComplete(() =>
      questions.every((question) => question.selected_answer !== "")
    );
  }, [questions]);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(() => {
          const questionsArr = data.results.map((el) => {
            return {
              ...el,
              id: nanoid(),
              all_answers: el.incorrect_answers.concat([el.correct_answer]),
              selected_answer: "",
            };
          });
          //console.log(resultsArr);
          return questionsArr;
        });
      });
  }, [gameCount]);

  function newGame() {
    setQuizIsChecked(false);
    setQuizIsComplete(false);
    setGameCount((num) => num + 1);
  }

  function chooseAnswer(e, id) {
    setQuestions((prevState) => {
      const newState = prevState.map((el) => {
        if (el.id === id) {
          return { ...el, selected_answer: e.target.id };
        } else {
          return el;
        }
      });
      return newState;
    });
  }

  function checkQuiz() {
    if (quizIsComplete) setQuizIsChecked(true);
  }

  const quizCards = questions.map((question) => {
    return (
      <QuizCard
        isChecked={quizIsChecked}
        question={question}
        key={nanoid()}
        handleClick={(e) => chooseAnswer(e, question.id)}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <section className="quizzes">
        <form className="quizzes__form">{quizCards}</form>
      </section>
      <Panel
        isComplete={quizIsComplete}
        handleNewGame={() => newGame()}
        handleSubmit={() => checkQuiz()}
      />
    </div>
  );
}

export default App;
