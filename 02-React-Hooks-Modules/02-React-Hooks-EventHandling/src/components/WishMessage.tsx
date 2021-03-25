import React, { useState } from "react";

interface IProps {}
interface IState {
  msg: string;
}

let WishMessage: React.FC<IProps> = () => {
  let [msgState, setMsgState] = useState<IState>({
    msg: "",
  });

  let sayGoodMorning = () => {
    setMsgState({
      msg: "Good Morning",
    });
  };

  let sayGoodAfternoon = () => {
    setMsgState({
      msg: "Good Afternoon",
    });
  };

  let sayGoodEvening = () => {
    setMsgState({
      msg: "Good Evening",
    });
  };

  return (
    <React.Fragment>
      <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <p className="h3">{msgState.msg}</p>
                  <button
                    onClick={sayGoodMorning}
                    className="btn btn-success btn-sm"
                  >
                    Good Morning
                  </button>
                  <button
                    onClick={sayGoodAfternoon.bind(this, "Good Afternoon")}
                    className="btn btn-danger btn-sm"
                  >
                    Good Afternoon
                  </button>
                  <button
                    onClick={() => {
                      setMsgState({
                        msg: "Good Eveningg",
                      });
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    Good Evening
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

export default WishMessage;
