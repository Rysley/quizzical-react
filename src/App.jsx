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
      console.log(Object.values(quizForm).length);
      return newForm;
    });
  }

  function checkForm() {
    const formArray = Object.values(quizForm);
  }

  return (
    <div className="App">
      <Header />
      <Quizzes questions={questions} handleClick={(e) => chooseAnswer(e)} />
      <Panel
        formIsComplete={Object.values(quizForm).length === questions.length}
        handleNewGame={() => newGame()}
        handleSubmit={() => checkForm()}
      />
    </div>
  );
}

export default App;
