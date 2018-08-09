import React, { Component } from 'react';
import { soundbank } from "./sounds.js"
import './App.css';

const soundsArray = Object.values(soundbank);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeLevel: 50,
      display: "Basic Mixer 808",
      pressed: false
    }
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyLift = this.handleKeyLift.bind(this);
    this.getEvtType = this.getEvtType.bind(this);
  }

  getEvtType(evt) {
    const currEvent = evt.type;
    console.log("event type is:", currEvent);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
    document.addEventListener("keyup", this.handleKeyLift)
    document.addEventListener("keydown", this.getEvtType)
    document.addEventListener("click", this.getEvtType)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    switch (event.key) {
      case "q":
        this.playAudio(soundbank.kick1.audio);
        break;
      case "w":
        this.playAudio(soundbank.kick2.audio);
        break;
      case "e":
        this.playAudio(soundbank.ride.audio);
        break;
      case "a":
        this.playAudio(soundbank.snare1.audio);
        break;
      case "s":
        this.playAudio(soundbank.clap.audio);
        break;
      case "d":
        this.playAudio(soundbank.hihatClose.audio);
        break;
      case "z":
        this.playAudio(soundbank.snare2.audio);
        break;
      case "x":
        this.playAudio(soundbank.shaker.audio);
        break;
      case "c":
        this.playAudio(soundbank.hihatOpen.audio);
        break;
    }
    for (let i = 0; i < soundsArray.length; i++) {
      if (soundsArray[i]["key"] === event.key) {
        
        this.setState({
          display: soundsArray[i]["title"],
          pressed: true
        })
      }
    }
  }

  handleKeyLift() {
    this.setState({
      pressed: false
    })
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
            <button id="one" className="red" onMouseDown={() => {this.playAudio(soundbank.kick1.audio)}}>q</button>
            <button id="two" className="red" onMouseDown={() => {this.playAudio(soundbank.kick2.audio)}}>w</button>
            <button id="three" className="red" onMouseDown={() => {this.playAudio(soundbank.ride.audio)}}>e</button>
            <button id="four" className="orange" onMouseDown={() => {this.playAudio(soundbank.snare1.audio)}}>a</button>
            <button id="five" className="orange" onMouseDown={() => {this.playAudio(soundbank.clap.audio)}}>s</button>
            <button id="six" className="orange" onMouseDown={() => {this.playAudio(soundbank.hihatClose.audio)}}>d</button>
            <button id="seven" className="yellow" onMouseDown={() => {this.playAudio(soundbank.snare2.audio)}}>z</button>
            <button id="eight" className="yellow" onMouseDown={() => {this.playAudio(soundbank.shaker.audio)}}>x</button>
            <button id="nine" className="yellow" onMouseDown={() => {this.playAudio(soundbank.hihatOpen.audio)}}>c</button>
          </div>
          <div id="controls">
            <div id="sound-display">
              <p>{this.state.display}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
