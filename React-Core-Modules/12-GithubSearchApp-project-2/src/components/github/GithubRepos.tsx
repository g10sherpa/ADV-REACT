import React from "react";
import { IRepository } from "./models/IRepository";

interface IProps {
  repos: IRepository[];
}
interface IState {}

class GithubRepos extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    let { repos } = this.props;
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.props.repos)}</pre> */}
        <div className="card">
          <div className="card-header">
            <p className="h4">Your Repositories</p>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {repos.map((repo) => {
                return (
                  <li className="list-group-item" key={repo.git_url}>
                    <div className="d-flex justify-content-between">
                      <span className="h5">
                        <a href={repo.html_url}>{repo.name}</a>
                      </span>
                      <span className="badge badge-success">
                        {repo.stargazers_count}
                      </span>
                      <span className="badge badge-warning">
                        {repo.watchers_count}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GithubRepos;
