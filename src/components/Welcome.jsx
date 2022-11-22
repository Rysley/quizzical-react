import React from "react";
import { Carousel } from "react-carousel3";
import { quizCategories, quizDifficulty, quizLength } from "../data/quizData";

export default function Welcome(props) {
  const [formData, setFormData] = React.useState({
    amount: "4",
    difficulty: "easy",
    category: "",
    isSubmitted: false,
  });

  function handleChange(event, name) {
    const { value, id } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value ? value : id };
    });
  }

  function handleStartQuiz() {
    setFormData((prevData) => {
      return { ...prevData, isSubmitted: true };
    });
    props.handleStartQuiz(formData);
  }

  const QuizDifficulty = quizDifficulty.map((difficulty, i) => (
    <div key={i} className="welcome__carousel-element">
      <span
        key={i}
        alt={difficulty.value}
        id={difficulty.value}
        onClick={(e) => handleChange(e, difficulty.name)}
      >
        {`${difficulty.text}`}
      </span>
    </div>
  ));

  const QuizCategories = quizCategories.map((category, i) => (
    <option value={category.value} key={i}>{`${category.name}`}</option>
  ));

  const QuizLength = quizLength.map((amount, i) => (
    <div className="form__radio-input" key={i}>
      <input
        className="form__radio-btn"
        type="radio"
        id={amount.value}
        value={amount.value}
        name="amount"
        checked={formData.amount === amount.value}
        onChange={(e) => handleChange(e, amount.name)}
      />
      <label
        className="form__radio-label"
        htmlFor={amount.value}
      >{`${amount.value} questions`}</label>
    </div>
  ));

  return (
    <section className="welcome">
      <h2 className="welcome__subtitle u-grid-start-2">
        Answer trivia questions from 25 fun categorties
      </h2>
      <span className="welcome__menu-description u-grid-start-2">
        Select difficulty &rarr;
      </span>
      <div className="welcome__carousel u-grid-start-2">
        <Carousel
          height={100}
          width={450}
          yOrigin={5}
          yRadius={7}
          autoPlay={false}
        >
          {QuizDifficulty}
        </Carousel>
      </div>
      <span className="welcome__menu-description u-grid-start-2">
        Select category &rarr;
      </span>
      <form className="form u-grid-start-2">
        <select
          name="category"
          id="category"
          value={formData.category}
          className="form__select"
          onChange={(e) => handleChange(e, "category")}
        >
          {QuizCategories}
        </select>
      </form>

      <span className="welcome__menu-description u-grid-start-2">
        Select length &rarr;
      </span>
      <fieldset className="form form__radio u-grid-start-2">
        <legend>Number of questions in the quiz</legend>
        {QuizLength}
      </fieldset>
      <button
        className="btn welcome__new-game u-grid-start-2"
        onClick={handleStartQuiz}
      >
        Start quiz
      </button>
    </section>
  );
}
