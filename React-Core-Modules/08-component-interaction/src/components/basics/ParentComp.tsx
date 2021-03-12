import React from 'react';
import ChildComp from './ChildComp';

interface IProps {}
interface IState {
    pText : string;
    cMessage : string;
}

class ParentComp extends React.Component<IProps,IState>{
    constructor(props:IState){
        super(props);
        this.state = {
            pText: 'hello , i m from parent comp',
            cMessage : ''
        }
    }

    receiveData = (data:string) => {
        this.setState({
            ...this.state,
            cMessage : data
        })
    }

    render():React.ReactNode{
        return(
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body rgba-yellow-light">
                                        <p className="h4">Parent Card</p>
                                        <small>From Child : {this.state.cMessage}</small>
                                        <ChildComp message={this.state.pText} sendData={this.receiveData}/>
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

export default ParentComp;