import React from 'react';
import UserList from './components/UserList'
import './App.css';
class App extends React.Component{

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React - Sever Connection
          </a>
        </nav>
        <UserList />
      </React.Fragment>
    );
  }
}

export default App;