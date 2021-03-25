import React, { useState } from "react";

interface IProps {}
interface IState {
  count: number;
}

let Counter: React.FC<IProps> = () => {
  let [countState, setCountState] = useState<IState>({
    count: 0,
  });

  let clickIncr = () => {
    setCountState({
      count: countState.count + 1,
    });
  };

  let clickDecr = () => {
    setCountState({
      count: countState.count - 1,
    });
  };

  return (
    <React.Fragment>
      <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h3">Counter</p>
                </div>
                <div className="card-body">
                  <h5 className="display-4">{countState.count}</h5>
                  <button onClick={clickIncr} className="btn btn-danger btn-sm">
                    Incr
                  </button>
                  <button onClick={clickDecr} className="btn btn-danger btn-sm">
                    Decr
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Counter;
