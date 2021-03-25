import React from 'react';
import ContactApp from './components/contact-app/ContactApp'
import './App.css';
class App extends React.Component{

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React - Contact App
          </a>
        </nav>
        <ContactApp />
      </React.Fragment>
    );
  }
}

export default App;