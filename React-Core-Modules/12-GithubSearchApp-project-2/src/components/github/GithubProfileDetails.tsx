import React from "react";
import { IProfile } from "./models/IProfile";

interface IProps {
  profile: IProfile;
}
interface IState {}

class GithubProfileDetails extends React.Component<IProps, IState> {
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
          <div className="card-header">
            <span className="badge badge-success mx-2">
              {profile.followers} Followers
            </span>
            <span className="badge badge-success mx-2">
              {profile.public_repos}Repository
            </span>
            <span className="badge badge-success mx-2">
              {profile.public_gists} Public
            </span>
            <span className="badge badge-success mx-2">
              {profile.following} Following
            </span>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Name: <span className="font-weight-bold">{profile.name}</span>
              </li>
              <li className="list-group-item">
                Location:{" "}
                <span className="font-weight-bold">{profile.location}</span>
              </li>
              <li className="list-group-item">
                Email: <span className="font-weight-bold">{profile.email}</span>
              </li>
              <li className="list-group-item">
                Company:{" "}
                <span className="font-weight-bold">{profile.company}</span>
              </li>
              <li className="list-group-item">
                Blog: <span className="font-weight-bold">{profile.blog}</span>
              </li>
              <li className="list-group-item">
                Member Since: <span> {profile.name}</span>
              </li>
              <li className="list-group-item">
                Profile URL:
                <span>
                  <a href={profile.html_url}>{profile.html_url}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GithubProfileDetails;
