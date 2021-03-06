import React from "react";
import card1 from "../assets/images/1.jpg";
import card2 from "../assets/images/2.jpg";
import card3 from "../assets/images/3.jpg";
import card4 from "../assets/images/2.jpg";

class Card extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section className="p-3 mb-2 bg-danger text-white">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img src={card1} alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Molestias cum dolorem ipsam nulla nobis eum facilis qui
                      dignissimos impedit nam.
                    </p>
                    <button className="btn btn-success btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card">
                  <img src={card2} alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Molestias cum dolorem ipsam nulla nobis eum facilis qui
                      dignissimos impedit nam.
                    </p>
                    <button className="btn btn-success btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card">
                  <img src={card3} alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Molestias cum dolorem ipsam nulla nobis eum facilis qui
                      dignissimos impedit nam.
                    </p>
                    <button className="btn btn-success btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card">
                  <img src={card4} alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Molestias cum dolorem ipsam nulla nobis eum facilis qui
                      dignissimos impedit nam.
                    </p>
                    <button className="btn btn-success btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
