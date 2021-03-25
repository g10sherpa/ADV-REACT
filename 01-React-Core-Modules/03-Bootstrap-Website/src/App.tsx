import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Intro from './components/Intro';
import Card from './components/card';
import Footer from './components/Footer';
class App extends React.Component {

  render(): React.ReactNode{
    return (
      <React.Fragment>
        <NavBar />
        <LandingPage />
        <Intro />
        <Card />
        <Footer />
      </React.Fragment>
        
    );
  }
}

export default App;