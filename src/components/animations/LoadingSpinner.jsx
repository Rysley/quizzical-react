import React from "react";
import ReactDOM from "react-dom";
import { SpinnerCircular } from "spinners-react";
import QuestionsContext from "../../context/questions-context";

export default function LoadingSpinner() {
  const ctx = React.useContext(QuestionsContext);

  const spinner = (
    <SpinnerCircular
      size={120}
      thickness={200}
      speed={151}
      color="rgba(57, 143, 172, 1)"
      secondaryColor="rgba(57, 172, 150, 0.26)"
      enabled={ctx.isLoading}
    />
  );

  return <div className="spinner">{spinner}</div>;
}
