import React from "react";

interface IProps {
    cardImg : string;
}
interface IState {}

class Card extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className="col-md-3">
          <div className="card">
            <img src={this.props.cardImg} alt="" />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias cum dolorem ipsam nulla nobis eum facilis qui
                dignissimos impedit nam.
              </p>
              <button className="btn btn-success btn-sm">Read More</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
