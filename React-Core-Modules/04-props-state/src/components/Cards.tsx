import React from "react";
import card1 from "../assets/images/1.jpg";
import card2 from "../assets/images/2.jpg";
import card3 from "../assets/images/3.jpg";
import card4 from "../assets/images/2.jpg";
import Card from "./Card";

interface IProps {}

interface IState {}

class Cards extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section className="p-3 mb-2 bg-danger text-white">
          <div className="container mt-3">
            <div className="row">
              <Card cardImg={card1} />
              <Card cardImg={card2} />
              <Card cardImg={card3} />
              <Card cardImg={card4} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Cards;
