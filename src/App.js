import React, { Component } from 'react';
import './App.css';
import flags from './flags.json';
import Navbar from './components/Navbar';
import MessageArea from './components/MessageArea';
import FlagCard from './components/FlagCard';

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
    this.shuffleArray(flags);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <MessageArea message={this.state.message} topScore={this.state.topScore} score={this.state.score}></MessageArea>
   
        {
          this.state.flags.map(flags =>(
            <FlagCard flag={flags.flag} 
            imageLink={flags.imageLink}
            selectFlag={this.selectFlag}
            score={this.state.score} />
          ))
        }
        </div>
    );
  }
}

export default App;
