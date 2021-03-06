import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import flags from './flags.json';
import Navbar from './components/Navbar';
// import MessageArea from './components/MessageArea';
import FlagCard from './components/FlagCard';
// import GameLoseModal from './components/GameLoseModal';

class App extends Component {
  
  state = {
    message: 'Select a Flag to Begin',
    topScore: 0,
    score: 0,
    flags: flags,
    unselectedFlags: flags
  }

  componentDidMount(){

  }

  //Rewritten Shuffle for Learning
  FisherYatesShuffle = (array) => {
    let currentIndex = array.length, tempValue, randomIndex;
    
    while (0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; 

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;

  }

  selectFlag = (flag) => {
    console.log(flag);
    const findFlag = this.state.unselectedFlags.find(item => item.flag === flag);
    // console.log(findFlag);

    if(findFlag === undefined){
      this.setState({
        message: 'You have chosen poorly',
        //Ternary Operator: if the current score is greater than the top score to update the new top score for the user else keep the top score.
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        flags: flags,
        //getting one wrong resets the flag unselected flag state to include all the flags from the json file.
        unselectedFlags: flags
        
      });

    }
    else{
      
      const newFlags = this.state.unselectedFlags.filter(item => item.flag !== flag)
      console.log(newFlags);
      this.setState({
        message: "You have chosen wisely",
        score: this.state.score + 1,
        flags: flags,
        unselectedFlags: newFlags
      });
    }
    this.FisherYatesShuffle(flags);
  }

  render() {
    return (
      <Route exact path={"/"}>
      <div>
        <Navbar message={this.state.message} topScore={this.state.topScore} score={this.state.score}></Navbar>
        
       
        {/* <GameLoseModal topScore={this.state.topScore} score={this.state.score}></GameLoseModal> */}
          <div className="flags-list">
        {
            this.state.flags.map(flags =>(
            <FlagCard flag={flags.flag} 
            imageLink={flags.imageLink}
            selectFlag={this.selectFlag}
            score={this.state.score} />
          ))
        }
          </div>
      </div>
      </Route>
    );
  }
}

export default App;
