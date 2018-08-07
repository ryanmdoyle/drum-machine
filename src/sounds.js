import clap from './sounds/Clap.wav'
import hhClose from './sounds/HiHatClosed.wav'
import hhOpen from './sounds/HiHatOpen.wav'
import kick1 from './sounds/Kick1.wav'
import kick2 from './sounds/Kick2.wav'
import ride from './sounds/Ride.wav'
import shaker from './sounds/Shaker.wav'
import snare1 from './sounds/Snare1.wav'
import snare2 from './sounds/Snare2.wav'

export const soundbank = {
    clap: {
      title: "Clap",
      key: "s",
      id: "five",
      audio: clap
    },
    hihatClose: {
      title: "Hi-hat Closed",
      key: "d",
      id: "six", 
      audio: hhClose
    },
    hihatOpen: {
      title: "Hi-hat Open",
      key: "c",
      id: "nine",
      audio:hhOpen
    },
    kick1: {
      title: "Kick 1",
      key: "q",
      id: "one",
      audio: kick1
    },
    kick2: {
      title: "Kick 2",
      key: "w",
      id: "two",
      audio: kick2
    },
    ride: {
      title: "Ride",
      key: "e",
      id: "three",
      audio: ride
    },
    shaker: {
      title: "Shaker",
      key: "x",
      id: "eight",
      audio: shaker
    },
    snare1: {
      title: "Snare 1",
      key: "a",
      id: "four",
      audio: snare1
    },
    snare2: {
      title: "Snare 2",
      key: "z",
      id: "seven",
      audio: snare2
    },
  }