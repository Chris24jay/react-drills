import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      food:["spaghetti","ice cream","sushi","bologna","cheese"],
    }
  }

  // listMyFood(val){
  // }


  render() {
    let displayFood = this.state.food.map((val,ind) => {
      return (
        <h1 key={ ind }>{ val }</h1>
      )
    })
    return (
      <div className="App">
          {displayFood}
      </div>
    );
  }
}

export default App;
