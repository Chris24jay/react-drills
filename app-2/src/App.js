import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      textBox: "",
      food:["spaghetti","ice cream","sushi","bologna","cheese"],
    }
  }


  render() {
    let foodDisplay = this.state.food.map((val) => {
      return (
        <h2>{val}</h2>
      )
    })

    return (
      <div className="App">
        {foodDisplay}
      </div>
    );
  }
}

export default App;
