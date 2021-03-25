import React from "react";

interface IProps {}
interface IState {}

class Home extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section className="Landing-Page">
          <div className="wrapper">
            <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
              <h5 className="heading5">
                <b>Welcome to React WORLD</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
                quas?
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
