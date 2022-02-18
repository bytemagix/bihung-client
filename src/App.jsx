import logo from "./logo.svg";
import "./App.scss";

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./components/AppRouter";

const headerPortalTarget = document.getElementById("top-controls");

function App() {
  return (
    <div className="App">
      <AppRouter />
      {ReactDOM.createPortal(<Header />, headerPortalTarget)}
    </div>
  );
}

export const init = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};
