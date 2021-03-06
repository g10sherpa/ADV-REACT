import React from "react";
import "./App.css";
import Card from "./components/Card";
class App extends React.Component {

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav>
          <a href="/ReactJS">React Js with Gyamzo</a>
        </nav>
        <Card />
      </React.Fragment>
    );
  }
}

export default App;