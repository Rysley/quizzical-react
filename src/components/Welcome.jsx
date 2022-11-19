import React from "react";
import { Carousel } from "react-carousel3";
import logo from "../assets/react.svg";

const style = {
  width: "auto",
  height: "auto",
  cursor: "pointer",
};

export default function Welcome() {
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

  return (
    <section className="welcome">
      <h2 className="welcome__subtitle">
        Answer trivia questions from 25 fun categorties
      </h2>
      <span
        className="welcome__menu-description"
        style={{ cursor: "pointer" }}
        onClick={logClick}
      >
        Select category
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background:
            "transparent" /* "linear-gradient(to bottom, #16235e 0%, #020223 100%)" */,
        }}
      >
        <Carousel
          height={460}
          width={980}
          yOrigin={30}
          yRadius={20}
          autoPlay={false}
        >
          <div key={1} style={style}>
            <span>ART</span>
            <img
              src={logo}
              alt="art"
              id="art"
              name="category"
              onClick={(e) => handleChange(e)}
            />
          </div>
          <div key={2} style={style}>
            <span>SPORT</span>
            <img
              src={logo}
              alt="sport"
              id="sport"
              name="category"
              onClick={(e) => handleChange(e)}
            />
          </div>
          <div key={3} style={style}>
            <span>SCIENCE</span>
            <img
              src={logo}
              alt="science"
              id="science"
              name="category"
              onClick={(e) => handleChange(e)}
            />
          </div>
        </Carousel>
      </div>

      <button className="btn panel__new-game">Start quiz</button>
    </section>
  );
}
