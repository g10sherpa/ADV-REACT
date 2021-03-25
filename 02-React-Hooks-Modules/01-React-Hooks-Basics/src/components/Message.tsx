import React from "react";

interface IProps {
  name: string;
  age: number;
}
interface IState {}

let Message: React.FC<IProps> = ({ name, age }) => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card m-3">
                <div className="card-body">
                  <p className="h3">
                    Hello {name} you are {age} yrs old!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Message;
