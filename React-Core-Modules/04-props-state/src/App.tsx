import React from 'react';
import './App.css';
import Message from './components/Message';
import Employee from './components/Employee';
import Cards from './components/Cards';

class App extends React.Component {

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">React - Props and State</a>
        </nav>
        {/* <Message name="Gyamzo" age={23} designation="Lead"/>
        <Message name="Gyamzo" age={23} designation="Lead"/>
        <Message name="Gyamzo" age={23} designation="Lead"/> */}

        {/* <Employee /> */}
        <Cards />
      </React.Fragment>
        
    );
  }
}

export default App;