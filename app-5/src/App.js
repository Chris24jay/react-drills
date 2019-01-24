import React, { Component } from 'react';
import Ron from './components/Ron'
import RonSwanGun from './Images/RonSwanGun.jpg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Ron goldGun= { RonSwanGun } />
      </div>
    );
  }
}

export default App;
