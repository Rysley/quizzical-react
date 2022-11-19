import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import QuizCard from "./components/QuizCard";
import Panel from "./components/Panel";
import arrayShuffle from "array-shuffle";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import LoadingSpinner from "./assets/SpinnerCircular";

function App() {
  const [gameCount, setGameCount] = useState(0);
  const [quizForm, setQuizForm] = useState({
    amount: 4,
    difficulty: "easy",
    category: "",
    isSubmitted: false,
  });
  const [questions, setQuestions] = useState([]);
  const [quizIsComplete, setQuizIsComplete] = useState(false);
  const [quizIsChecked, setQuizIsChecked] = useState(false);
  const [score, setScore] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setQuizIsComplete(() =>
      questions.every((question) => question.selected_answer !== "")
    );
  }, [questions]);

  useEffect(() => {
    renderSpinner();
    fetch(
      `https://opentdb.com/api.php?amount=${quizForm.amount}&category=${quizForm.category}&difficulty=${quizForm.difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(() => {
          const questionsArr = data.results.map((el) => {
            const correctID = nanoid();
            return {
              ...el,
              question: el.question,
              id: nanoid(),
              all_answers: arrayShuffle(
                el.incorrect_answers
                  .map((incAnswer) => {
                    return {
                      answer: incAnswer,
                      isCorrect: false,
                      id: nanoid(),
                    };
                  })
                  .concat([
                    {
                      answer: el.correct_answer,
                      isCorrect: true,
                      id: correctID,
                    },
                  ])
              ),

              selected_answer: "",
              correct_answer: correctID,
            };
          });
          setIsLoading(false);
          return questionsArr;
        });
      });
  }, [gameCount]);

  function renderSpinner() {
    setIsLoading(true);
  }

  function newGame() {
    setQuizIsChecked(false);
    setQuizIsComplete(false);
    setScore({});
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

    const totalCorrect = questions.filter(
      (q) => q.selected_answer === q.correct_answer
    );

    setScore((prevState) => ({
      ...prevState,
      numCorrectAnswers: totalCorrect.length,
      totalQuestions: questions.length,
    }));
  }

  const quizCards = questions.map((question) => {
    return (
      <QuizCard
        isChecked={quizIsChecked}
        question={question}
        key={question.id}
        /*  id={question.id} */
        handleClick={(e) => chooseAnswer(e, question.id)}
      />
    );
  });

  return (
    <div className="App">
      <LoadingSpinner enabled={isLoading} />
      <Header />
      {!quizForm.isSubmitted && <Welcome />}
      {score.numCorrectAnswers >= 0.6 * score.totalQuestions ? (
        <Confetti />
      ) : null}
      {quizForm.isSubmitted && (
        <section className="quizzes">
          <div className="quizzes__form">{quizCards}</div>
        </section>
      )}
      {quizForm.isSubmitted && (
        <Panel
          isComplete={quizIsComplete}
          isChecked={quizIsChecked}
          score={score}
          handleNewGame={() => newGame()}
          handleSubmit={() => checkQuiz()}
        />
      )}
    </div>
  );
}

export default App;
