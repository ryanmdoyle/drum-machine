import React, { Component } from 'react';
import { soundbank } from "./sounds.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeLevel: 50
    }
    this.playAudio = this.playAudio.bind(this);
  //  this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  // handleKeyPress(event) {

  //   switch (event.keyCode) {
  //     case 81:
  //       this.playAudio(kick1);
  //       break;
  //     case 87:
  //       this.playAudio(kick2);
  //       break;
  //     case 69:
  //       this.playAudio(ride);
  //       break;
  //     case 65:
  //       this.playAudio(snare1);
  //       break;
  //     case 83:
  //       this.playAudio(clap);
  //       break;
  //     case 68:
  //       this.playAudio(hhClose);
  //       break;
  //     case 90:
  //       this.playAudio(snare2);
  //       break;
  //     case 88:
  //       this.playAudio(shaker);
  //       break;
  //     case 67:
  //       this.playAudio(hhOpen);
  //       break;
  //   }
  // }
  
  playAudio(src) {
    const audio = new Audio(src);
    audio.play();
    console.log(src);
  }

  render() {
    return (
      <div className="App">
        <div id="eightoeight">
          <div id="buttons">
            <button id="one" className="red" onClick={() => {this.playAudio(soundbank.kick1.audio)}}>q</button>
            <button id="two" className="red" onClick={() => {this.playAudio(soundbank.kick2.audio)}}>w</button>
            <button id="three" className="red" onClick={() => {this.playAudio(soundbank.ride.audio)}}>e</button>
            <button id="four" className="orange" onClick={() => {this.playAudio(soundbank.snare1.audio)}}>a</button>
            <button id="five" className="orange" onClick={() => {this.playAudio(soundbank.clap.audio)}}>s</button>
            <button id="six" className="orange" onClick={() => {this.playAudio(soundbank.hihatClose.audio)}}>d</button>
            <button id="seven" className="yellow" onClick={() => {this.playAudio(soundbank.snare2.audio)}}>z</button>
            <button id="eight" className="yellow" onClick={() => {this.playAudio(soundbank.shaker.audio)}}>x</button>
            <button id="nine" className="yellow" onClick={() => {this.playAudio(soundbank.hihatOpen.audio)}}>c</button>
          </div>
          <div id="controls">
            <div id="sound-display">
              <p>Sound Display</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
