import { useEffect, useState } from "react";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Panel from "./components/Panel";

function App() {
  const [gameNum, setGameNum] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [quizForm, setQuizForm] = useState({});

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, [gameNum]);

  function newGame() {
    setGameNum((num) => num + 1);
  }

  function chooseAnswer(e) {
    const selected = e.target;
    setQuizForm((prevForm) => {
      const newForm = {
        ...prevForm,
        [selected.id]: {
          cardID: selected.id,
          answer: e.target.innerHTML,
          isCorrect:
            questions[selected.id].correct_answer ===
            selected.getAttribute("value")
              ? true
              : false,
        },
      };
      console.log(newForm);
      return newForm;
    });
  }

  return (
    <div className="App">
      <Header />
      <Quizzes questions={questions} handleClick={(e) => chooseAnswer(e)} />
      <Panel handleNewGame={() => newGame()} />
    </div>
  );
}

export default App;
