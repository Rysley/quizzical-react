import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Panel from "./components/Panel";
import ConfettiAnimation from "./components/animations/ConfettiAnimation";
import LoadingSpinner from "./components/animations/LoadingSpinner";

function App() {
  return (
    <React.Fragment>
      <LoadingSpinner />
      <ConfettiAnimation />
      <Header />
      <Welcome />
      <Quizzes />
      <Panel />
    </React.Fragment>
  );
}

export default App;
