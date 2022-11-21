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

  function logClick() {
    console.log(formData);
  }

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

  const Categories = quizCategories.map((category, i) => (
    <option value={category.value} key={i}>{`${category.name}`}</option>
  ));

  const Difficulties = quizDifficulty.map((difficulty, i) => (
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

  const Amount = quizLength.map((amount, i) => (
    <div className="form__radio-input" key={i}>
      <input
        type="radio"
        id={amount.value}
        value={amount.value}
        name="amount"
        checked={formData.amount === amount.value}
        onChange={(e) => handleChange(e, amount.name)}
      />
      <label htmlFor={amount.value}>{`${amount.value} questions`}</label>
    </div>
  ));

  return (
    <section className="welcome">
      <h2 className="welcome__subtitle u-grid-start-2">
        Answer trivia questions from 25 fun categorties
      </h2>
      <span
        className="welcome__menu-description u-grid-start-2"
        onClick={logClick}
      >
        Select difficulty &rarr;
      </span>
      <div className="welcome__carousel u-grid-start-2">
        <Carousel
          height={120}
          width={980}
          yOrigin={30}
          yRadius={20}
          autoPlay={false}
        >
          {Difficulties}
        </Carousel>
      </div>
      <span
        className="welcome__menu-description u-grid-start-2"
        onClick={logClick}
      >
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
          {Categories}
        </select>
      </form>

      <span
        className="welcome__menu-description u-grid-start-2"
        onClick={logClick}
      >
        Select length &rarr;
      </span>
      <fieldset className="form form__radio u-grid-start-2">
        <legend>Number of questions in the quiz</legend>
        {Amount}
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
/* 
<div className="form__radio-input">
<input
  type="radio"
  id="5"
  value="5"
  name="amount"
  checked={formData.amount === "5"}
  onChange={(e) => handleChange(e, "amount")}
/>
<label htmlFor="5">5 questions</label>
</div>
<div className="form__radio-input">
<input
  type="radio"
  id="10"
  value="10"
  name="amount"
  checked={formData.amount === "10"}
  onChange={(e) => handleChange(e, "amount")}
/>
<label htmlFor="10">10 questions</label>
</div> */
