import React from "react";

interface IProps {}
interface IState {}

class StockDetails extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return <React.Fragment></React.Fragment>;
  }
}

export default StockDetails;
