import React from "react";

class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <div className="container">
            <a href="/" className="navbar-brand">React Bootstrap</a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
