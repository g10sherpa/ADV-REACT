import React from 'react';

interface IProps {}
interface IState {
    msg : string;
}

class WishMessage extends React.Component<IProps,IState>{
    constructor(props:IState){
        super(props);
        this.state = {
            msg : 'hello'
        }
    }

    //1st method
    sayGoodMorning = () => {
        this.setState({
            msg : 'good morning'
        });
    }

    //2nd method
    sayGoodAfterNoon = (value:string) => {
        this.setState({
            msg : value
        });
    }

    render():React.ReactNode{
        return(
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="h3">{this.state.msg}</p>
                                        <button onClick={this.sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                        <button onClick={this.sayGoodAfterNoon.bind(this,'good afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                        <button className="btn btn-danger btn-sm">Good Evening</button>
                                        
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

export default WishMessage;