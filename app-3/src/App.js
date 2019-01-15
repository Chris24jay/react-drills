import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      textBox: null, 
    }
  }

  displayText(val){
    this.setState({
      textBox: val
    })
  }

  render() {
    let displayFood = this.state.food.filter((val) => {
      return val.includes(this.state.textBox)
    }).map((val,ind) => {
      return <h2 key={ ind }>{ val }</h2>
    })


    return(
      <div className="App">
        <input onChange={(e) => {this.displayText(e.target.value)}} />
        {displayFood}
      </div>
    );
  }
}

export default App;
