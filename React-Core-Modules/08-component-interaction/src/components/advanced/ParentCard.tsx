import React from "react";
import ChildCard from "./ChildCard";

interface IProps {}
interface IState {
  pText: string;
  cText : string
}

class ParentCard extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      pText: "",
      cText:""
    };
  }

  receiveData = (data:string):void =>{
    this.setState({
        ...this.state,
        cText : data
    })
  }

  updateInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        ...this.state,
        pText : event.target.value
    })
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">PARENT CARD</p>
                   
                  </div>
                  <div className="card-body rgba-purple-light">
                    <form>
                      <div className="form-group">
                        <input
                          value={this.state.pText}
                          onChange={this.updateInput}
                          type="text"
                          className="form-control"
                          placeholder="Parent Text"
                        />
                      </div>
                      <small>{this.state.cText}</small>
                    </form>
                    <ChildCard pText={this.state.pText} sendData={this.receiveData}/>
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

export default ParentCard;
