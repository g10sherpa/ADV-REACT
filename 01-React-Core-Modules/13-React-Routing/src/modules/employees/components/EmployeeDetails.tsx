import React from "react";

interface IProps {}
interface IState {}

class EmployeeDetails extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <h2>EmployeeDetails Component</h2>
      </React.Fragment>
    );
  }
}

export default EmployeeDetails;
