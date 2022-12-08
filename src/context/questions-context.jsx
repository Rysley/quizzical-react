import React from "react";
import arrayShuffle from "array-shuffle";
import { nanoid } from "nanoid";

const QuestionsContext = React.createContext({
  questions: [],
  gameCount: 0,
  isLoading: false,
  quizIsComplete: false,
  quizIsChecked: false,
  score: {},
  quizForm: {
    amount: 4,
    difficulty: "easy",
    category: "",
    isSubmitted: false,
  },
  checkQuiz: () => {},
  newGame: () => {},
  backToMenu: () => {},
  chooseAnswer: () => {},
});

export const QuestionsContextProvider = (props) => {
  const [quizIsComplete, setQuizIsComplete] = React.useState(false);
  const [quizIsChecked, setQuizIsChecked] = React.useState(false);
  const [score, setScore] = React.useState({});
  const [questions, setQuestions] = React.useState([]);
  const [gameCount, setGameCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [quizForm, setQuizForm] = React.useState({
    amount: 4,
    difficulty: "easy",
    category: "",
    isSubmitted: false,
  });
  function renderSpinner() {
    setIsLoading(true);
  }

  React.useEffect(() => {
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

  React.useEffect(() => {
    setQuizIsComplete(() =>
      questions.every((question) => question.selected_answer !== "")
    );
  }, [questions]);

  React.useEffect(() => {
    setQuizIsComplete(() =>
      questions.every((question) => question.selected_answer !== "")
    );
  }, [questions]);

  function newGame(startData = quizForm) {
    setQuizIsChecked(false);
    setQuizIsComplete(false);
    setScore({});
    setQuizForm((prevData) => {
      return { ...prevData, ...startData, isSubmitted: true };
    });
    setGameCount((num) => num + 1);
  }

  function backToMenu() {
    setQuizForm((prev) => ({ ...prev, isSubmitted: false }));
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

  return (
    <QuestionsContext.Provider
      value={{
        questions: questions,
        gameCount: gameCount,
        score: score,
        isLoading: isLoading,
        quizForm: quizForm,
        quizIsChecked: quizIsChecked,
        quizIsComplete: quizIsComplete,
        newGame: newGame,
        backToMenu: backToMenu,
        chooseAnswer: chooseAnswer,
        checkQuiz: checkQuiz,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
