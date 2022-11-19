import React from "react";
import { Carousel } from "react-carousel3";
import logo from "../assets/react.svg";

const style = {
  width: "auto",
  height: "auto",
  cursor: "pointer",
};

export default function Welcome() {
  return (
    <form className="welcome">
      <h2 className="welcome__subtitle">
        Answer trivia questions from 25 fun categorties
      </h2>
      <span className="welcome__menu-description">Select category</span>
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
          yOrigin={10}
          yRadius={70}
          autoPlay={false}
        >
          <div key={1} style={style}>
            <span>ART</span>
            <img
              src={logo}
              alt="react"
              style={{ marginRight: "2rem" }}
              onClick={console.log("click")}
            />
          </div>
          <div key={2} style={style}>
            <span>SPORT</span>
            <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
          </div>
          <div key={3} style={style}>
            <span>SCIENCE</span>
            <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
          </div>
          <div key={4} style={style}>
            <span>CINEMA</span>
            <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
          </div>
          <div key={5} style={style}>
            <span>HISTORY</span>
            <img src={logo} alt="react" style={{ marginRight: "2rem" }} />
          </div>
        </Carousel>
      </div>
      <button className="btn panel__new-game">Start quiz</button>
    </form>
  );
}
