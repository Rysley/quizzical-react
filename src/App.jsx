import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";

function App() {
  const [questions, setQuestions] = React.useState([]);
  console.log(questions);

  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function newGame() {
    setQuestions((prevstate) => {});
  }

  return (
    <div className="App">
      <Header />
      <Quizzes questions={questions} />
    </div>
  );
}

export default App;
