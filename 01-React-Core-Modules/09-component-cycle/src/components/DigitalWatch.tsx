
import React from 'react';

interface IProps {}
interface IState {
    currentTime  :string;
}

class DigitalWatch extends React.Component<IProps,IState>{
    private interval: NodeJS.Timeout = setInterval(() => {}, 1000);
    constructor(props:IState){
        super(props);
        this.state = {
            currentTime : new Date().toLocaleTimeString()
        }
    }

    //executes once, only when the component is fully loaded on DOM
    componentDidMount():void{
        setInterval(() => {
            this.setState({
                currentTime : new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    //executes only once, when the component is removed from DOM
    componentWillUnmount():void{
        clearInterval(this.interval);
    }

    render():React.ReactNode{
        return(
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Digital Watch</p>
                                    </div>
                                    <div className="card-body rgba-purple-light">
                                        <h5 className="display-3">{this.state.currentTime}</h5>
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

export default DigitalWatch;