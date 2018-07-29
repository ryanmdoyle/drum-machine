import React, { Component } from 'react';
// import logo from './logo.svg'; //import file!
import kick from './Kick003.wav'
import './App.css';

//const Audio = (props) => <audio id={props.id} src={props.src} preload="auto"></audio>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeLevel: 50
    }
    this.playAudio = this.playAudio.bind(this);
  }
  
  playAudio(src) {
    const audio = new Audio(src);
    audio.play();
  }

  //add event listeners to handle keyboard buttons

  render() {
    return (
      <div className="App">
        <div id="eightoeight">
          <div id="buttons">
            <button id="one" className="red" onClick={() => {this.playAudio(kick)}}>q</button>
            <button id="two" className="red">w</button>
            <button id="three" className="red">e</button>
            <button id="four" className="orange">a</button>
            <button id="five" className="orange">s</button>
            <button id="six" className="orange">d</button>
            <button id="seven" className="yellow">z</button>
            <button id="eight" className="yellow">x</button>
            <button id="nine" className="yellow">c</button>
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
