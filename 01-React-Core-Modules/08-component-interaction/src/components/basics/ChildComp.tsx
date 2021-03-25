import React from 'react';

interface IProps {
    message: string;
    sendData : (data:string) => void
}

interface IState {
    cText : string;
}

class ChildComp extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            cText : 'And I m from Child Comp'
        }
    }

    clickSend = () => {
        this.props.sendData(this.state.cText);
    }

    render():React.ReactNode{
        return(
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body rgba-red-light">
                                        <p className="h4">Child Card</p>
                                        <small>{this.props.message}</small>
                                        <button className="btn btn-success btn-sm" onClick={this.clickSend}>Send </button>
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

export default ChildComp;