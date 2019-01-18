import React, { Component } from 'react';

import './App.css';
import Login from './Component/Login'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userName: '',
      passWord: '',
      click: "Success!"
    }
  }


  render() {
    return (
      <div className="App">
          <Login />
      </div>
    );
  }
}

export default App;
