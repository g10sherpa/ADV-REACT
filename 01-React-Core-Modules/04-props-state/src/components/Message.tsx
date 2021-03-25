import React from 'react';

interface IProps{
    name: string;
    age: number;
    designation?:string;
}

interface IState{}

class Message extends React.Component<IProps,IState>{
    render():React.ReactNode{
        return(
            <React.Fragment>
                    <div className="card m-3">
                        <div className="card-body bg-info">
                            <ul className="list-group">
                                <li className="li list-group-item">Name : {this.props.name}</li>
                                <li className="li list-group-item">Age : {this.props.age}</li>
                                <li className="li list-group-item">Designation : {this.props.designation}</li>
                            </ul>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Message;