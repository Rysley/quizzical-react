import React from "react";
import { Carousel } from "react-carousel3";
import { quizCategories } from "../data/quizCategories";

export default function Welcome(props) {
  const [formData, setFormData] = React.useState({
    amount: 4,
    difficulty: "easy",
    category: "",
    isSubmitted: false,
  });

  function logClick() {
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value, id } = event.target;
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
          <div key={1} className="welcome__carousel-element">
            <span
              alt="easy"
              id="easy"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            >
              😎 easy
            </span>
          </div>
          <div key={2} className="welcome__carousel-element">
            <span
              alt="medium"
              id="medium"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            >
              😅 medium
            </span>
          </div>
          <div key={3} className="welcome__carousel-element">
            <span
              alt="hard"
              id="hard"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            >
              🥵 hard
            </span>
          </div>
        </Carousel>
      </div>
      <span
        className="welcome__menu-description u-grid-start-2"
        onClick={logClick}
      >
        Select category &rarr;
      </span>
      <form className="form u-grid-start-2" onSubmit={handleChange}>
        <select
          name="category"
          id="category"
          value={formData.category}
          className="form__select"
          onChange={handleChange}
        >
          {Categories}
        </select>
      </form>
      <button
        className="btn welcome__new-game u-grid-start-2"
        onClick={handleStartQuiz}
      >
        Start quiz
      </button>
    </section>
  );
}
