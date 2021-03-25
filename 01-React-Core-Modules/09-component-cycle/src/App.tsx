import React from 'react';
import DigitalWatch from './components/DigitalWatch'
import './App.css';
class App extends React.Component{

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React - Component LifeCycle
          </a>
        </nav>
        <DigitalWatch />
      </React.Fragment>
    );
  }
}

export default App;