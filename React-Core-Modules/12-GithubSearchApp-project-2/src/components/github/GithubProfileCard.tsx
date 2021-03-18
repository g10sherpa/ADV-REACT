import React from "react";
import { IProfile } from "./models/IProfile";

interface IProps {
  profile: IProfile;
}
interface IState {}

class GithubProfileCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    let { profile } = this.props;
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.props.profile)}</pre> */}
        <div className="card">
          <img src={profile.avatar_url} alt="" className="img-fluid" />
          <div className="card-body">
            <p className="h3">{profile.name}</p>
            <small>{profile.bio}</small>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GithubProfileCard;
