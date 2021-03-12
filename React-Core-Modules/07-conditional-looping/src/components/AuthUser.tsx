
import React from 'react';

interface IProps {}
interface IState {
    isLoggedIn: boolean;
}

class AuthUser extends React.Component<IProps,IState>{
    constructor(props:IState){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }

    Login = () => {
        this.setState({
            isLoggedIn : true
        })
    }

    Logout = () => {
        this.setState({
            isLoggedIn : false
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
                                    <div className="card-body">
                                        {
                                            this.state.isLoggedIn ? 
                                            <button onClick={this.Logout} className="btn btn-success btn-sm">Logout</button> :
                                            <button onClick={this.Login} className="btn btn-primary btn-sm">Login</button>
                                        }
                                        
                                        {
                                            this.state.isLoggedIn ?
                                            <p className="h3">Welcome Gyamzo</p> : 
                                            <p className="h3">Welcome Guest</p>
                                        }
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

export default AuthUser;