import React from 'react';
import AuthUser from './components/AuthUser';
import HobbySelector from './components/HobbySelector';
import Employees from './components/Employees';
import './App.css';
class App extends React.Component{

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React - Conditional && Looping
          </a>
        </nav>
      {/* <AuthUser /> */}
      {/* <HobbySelector /> */}
      <Employees />
      
      
      </React.Fragment>
    );
  }
}

export default App;