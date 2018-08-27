import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import flags from './flags.json';



class App extends Component {
  state ={
    message: 'Select a Flag to Begin',
    topScore: 0,
    score: 0,
    flags, flags,
    unselectedFlags: flags
  }

  componentDidMount(){

  }

  shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j] = array[j], array[i]];
    }
  }

  selectFlag = (flag) =>{
    const findFlag = this.state.unselectedFlags.find(item => item.flag === flag);

    if(findFlag === undefined){
      this.setState({
        message: 'You have chosen poorly',
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        flags: flags,
        unselectedFlags: flags
      });
    }
    else{
      
      const newFlags = this.state.unselectedFlags.filter(item => item.flag !== flag)

      this.setState({
        message: "You have chosen wisely",
        score: this.state.score + 1,
        flags: flags,
        unselectedFlags: newFlags
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
