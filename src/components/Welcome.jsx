import React from "react";
import { Carousel } from "react-carousel3";
import logo from "../assets/react.svg";

const style = {
  width: "auto",
  height: "auto",
  cursor: "pointer",
};

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
    //console.log(event);
    const { id, name } = event.target;
    console.log(id, name);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: id,
      };
    });
  }

  function handleSubmit(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleStartQuiz() {
    setFormData((prevData) => {
      return { ...prevData, isSubmitted: true };
    });
    props.handleStartQuiz(formData);
    console.log("quiz started", formData);
  }

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
          <div key={1} style={style} className="welcome__carousel-element">
            <span>EASY</span>
            <img
              src={logo}
              alt="easy"
              id="easy"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            />
          </div>
          <div key={2} style={style}>
            <span>MEDIUM</span>
            <img
              src={logo}
              alt="medium"
              id="medium"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            />
          </div>
          <div key={3} style={style}>
            <span>HARD</span>
            <img
              src={logo}
              alt="hard"
              id="hard"
              name="difficulty"
              onClick={(e) => handleChange(e)}
            />
          </div>
        </Carousel>
      </div>
      <span
        className="welcome__menu-description u-grid-start-2"
        onClick={logClick}
      >
        Select category &rarr;
      </span>
      <form className="form u-grid-start-2" onSubmit={handleSubmit}>
        <select
          name="category"
          id="category"
          value={formData.category}
          className="form__select"
          onChange={handleSubmit}
        >
          <option value={""}>-- Any --</option>
          <option value={"9"}>General Knowledge</option>
          <option value={"10"}>Entertainment: Books</option>
          <option value={"11"}>Entertainment: Film</option>
          <option value={"12"}>Entertainment: Music</option>
          <option value={"13"}>Entertainment: Theatre</option>
          <option value={"14"}>Entertainment: Television</option>
          <option value={"15"}>Entertainment: Video Games</option>
          <option value={"16"}>Entertainment: Board Games</option>
          <option value={"17"}>Science & Nature</option>
          <option value={"18"}>Science: Computers</option>
          <option value={"19"}>Science: Mathematics</option>
          <option value={"20"}>Mythology</option>
          <option value={"21"}>Sports</option>
          <option value={"22"}>Geography</option>
          <option value={"23"}>History</option>
          <option value={"24"}>Politics</option>
          <option value={"25"}>Art</option>
          <option value={"26"}>Celebrities</option>
          <option value={"27"}>Animals</option>
          <option value={"28"}>Vehicles</option>
          <option value={"29"}>Entertainment: Comics</option>
          <option value={"30"}>Science: Gadgets</option>
          <option value={"31"}>Entertainment: Manga</option>
          <option value={"32"}>Entertainment: Cartoon</option>
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
