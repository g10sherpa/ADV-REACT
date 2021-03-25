import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {}
interface IState {}

class NavBar extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <div className="container">
            <NavLink to={"/"} className="navbar-brand">
              <i className="fa fa-route">React Routing</i>
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to={"/"}
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/employees"}
                    activeClassName="active"
                    className="nav-link"
                  >
                    Employees
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/stocks"}
                    activeClassName="active"
                    className="nav-link"
                  >
                    Stocks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/about"}
                    activeClassName="active"
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
