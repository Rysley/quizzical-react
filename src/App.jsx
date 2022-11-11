import React from "react";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Panel from "./components/Panel";

function App() {
  const [gameNum, setGameNum] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  console.log(questions);

  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, [gameNum]);

  function newGame() {
    setGameNum((num) => num + 1);
  }

  function chooseAnswer() {
    console.log("clicked");
  }

  return (
    <div className="App">
      <Header />
      <Quizzes questions={questions} handleClick={() => chooseAnswer()} />
      <Panel handleNewGame={() => newGame()} />
    </div>
  );
}

export default App;
