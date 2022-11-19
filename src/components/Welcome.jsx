import React from "react";
import { Carousel } from "react-carousel3";

const style = {
  width: 297,
  height: 296,
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
          background: "linear-gradient(to bottom, #16235e 0%, #020223 100%)",
        }}
      >
        <Carousel
          height={460}
          width={980}
          yOrigin={42}
          yRadius={48}
          autoPlay={true}
        >
          <div key={1} style={style}>
            <img alt="" src="../assets/images/airbnb.png" />
          </div>
          <div key={2} style={style}>
            <img alt="" src="../assets/images/apple.png" />
          </div>
          <div key={3} style={style}>
            <img alt="" src="../assets/images/react.png" />
          </div>
        </Carousel>
      </div>
      <button className="btn panel__new-game">Start quiz</button>
    </form>
  );
}
