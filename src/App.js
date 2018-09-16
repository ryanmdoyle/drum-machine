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
    this.triggerSound = this.triggerSound.bind(this);
    this.getEvtKey = this.getEvtKey.bind(this);
    this.simulatePress = this.simulatePress.bind(this);
  }

  getEvtKey(event) {
    if (event.type === "click") {
      return event.toElement.dataset.key;
    } else if (event.type === "keydown") {
      return event.key;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.triggerSound)
    document.addEventListener("click", this.triggerSound)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  
  triggerSound(event) {
    const keyTriggered = this.getEvtKey(event);
    switch (keyTriggered) {
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
      default: 
        break;
    }
    for (let i = 0; i < soundsArray.length; i++) {
      if (soundsArray[i]["key"] === keyTriggered) {
        this.setState({
          display: soundsArray[i]["title"],
          pressed: true
        })
      }
    }
    this.simulatePress(event);
  }

  simulatePress(event) {
      const key = document.querySelector(`button[data-key="${this.getEvtKey(event)}"]`);
        key.classList.add('active');
      window.setTimeout(() => {
        key.classList.remove('active');
      }, 20);
  }
  
  playAudio(src) {
    const audio = new Audio(src);
    audio.currentTime = 0; //rewinds audio to beginning if pressed before it has previously ended
    audio.play();
  }

  render() {
    return (
      <div className="App">
        <div id="eightoeight">
          <div id="buttons">
            <button id="one" className="orange" data-key="q">q</button>
            <button id="two" className="orange" data-key="w" >w</button>
            <button id="three" className="orange" data-key="e" >e</button>
            <button id="four" className="orange" data-key="a">a</button>
            <button id="five" className="orange" data-key="s">s</button>
            <button id="six" className="orange" data-key="d">d</button>
            <button id="seven" className="orange" data-key="z">z</button>
            <button id="eight" className="orange" data-key="x">x</button>
            <button id="nine" className="orange" data-key="c">c</button>
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
