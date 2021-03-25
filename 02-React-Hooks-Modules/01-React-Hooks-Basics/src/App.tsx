import React from "react";
import "./App.css";
import Message from "./components/Message";

interface IProps {}
interface IState {}

let App: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
          React Hooks
        </a>
      </nav>
      <Message name="gyamzo" age={25} />
      <Message name="laxmi" age={22} />
    </React.Fragment>
  );
};

export default App;
