import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuestionsContextProvider } from "./context/questions-context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuestionsContextProvider>
    <App />
  </QuestionsContextProvider>
);
