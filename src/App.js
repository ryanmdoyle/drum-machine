import React, { Component } from 'react';

import clap from './sounds/Clap.wav'
import hhClose from './sounds/HiHatClosed.wav'
import hhOpen from './sounds/HiHatOpen.wav'
import kick1 from './sounds/Kick1.wav'
import kick2 from './sounds/Kick2.wav'
import ride from './sounds/Ride.wav'
import shaker from './sounds/Shaker.wav'
import snare1 from './sounds/Snare1.wav'
import snare2 from './sounds/Snare2.wav'
import './App.css';

//const Audio = (props) => <audio id={props.id} src={props.src} preload="auto"></audio>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeLevel: 50
    }
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {

    switch (event.keyCode) {
      case 81:
        this.playAudio(kick1);
        break;
      case 87:
        this.playAudio(kick2);
        break;
      case 69:
        this.playAudio(ride);
        break;
      case 65:
        this.playAudio(snare1);
        break;
      case 83:
        this.playAudio(clap);
        break;
      case 68:
        this.playAudio(hhClose);
        break;
      case 90:
        this.playAudio(snare2);
        break;
      case 88:
        this.playAudio(shaker);
        break;
      case 67:
        this.playAudio(hhOpen);
        break;
    }
  }
  
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
            <button id="one" className="red" onClick={() => {this.playAudio(kick1)}}>q</button>
            <button id="two" className="red" onClick={() => {this.playAudio(kick2)}}>w</button>
            <button id="three" className="red" onClick={() => {this.playAudio(ride)}}>e</button>
            <button id="four" className="orange" onClick={() => {this.playAudio(snare1)}}>a</button>
            <button id="five" className="orange" onClick={() => {this.playAudio(clap)}}>s</button>
            <button id="six" className="orange" onClick={() => {this.playAudio(hhClose)}}>d</button>
            <button id="seven" className="yellow" onClick={() => {this.playAudio(snare2)}}>z</button>
            <button id="eight" className="yellow" onClick={() => {this.playAudio(shaker)}}>x</button>
            <button id="nine" className="yellow" onClick={() => {this.playAudio(hhOpen)}}>c</button>
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
