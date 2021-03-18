import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import { IProfile } from "./models/IProfile";

interface IProps {
  profile: IProfile;
}
interface IState {}

class GithubProfile extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <GithubProfileCard profile={this.props.profile} />
          </div>
          <div className="col-md-9">
            <GithubProfileDetails profile={this.props.profile} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GithubProfile;
