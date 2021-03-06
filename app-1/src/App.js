import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
      textBox: null,
    }
  }

  displayText(val){
    console.log(val)
    this.setState({
      textBox: val
    })
  }


  render() {


    return (
      <div className="App">
        <input onChange={(e) => {this.displayText(e.target.value)}}/>
        <h1>{this.state.textBox}</h1>
      </div>
    );
  }
}

export default App;
