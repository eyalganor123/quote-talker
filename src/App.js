import React, { Component } from 'react';
import Speech from "speak-tts";
import Buttons from './Buttons'

import './App.css';
const speech = new Speech();


speech.init({
  volume: 0.5,
  lang: "en-US",
  rate: 1,
  pitch: .4,


});
const handleSpeak = () => {
  const h2 = document.getElementById('h2');
  const author = document.getElementById('author');
  const toSpeak = h2.innerText+author.innerText
  speech
    .speak({
      text: toSpeak,
      queue: false
    })
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: null,
      author: null,

    }

  }
  handleNext = () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(text => this.setState({ quote: text.content, author: text.author }))
      .then(handleSpeak)
      document.body.style.backgroundImage = `url('https://picsum.photos/${Math.floor(Math.random()*(500-480+1)+480)}/${Math.floor(Math.random()*(500-480+1)+480)}')`;
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(text => this.setState({ quote: text.content, author: text.author }))
  }


  render() {
    return (
      <div className="flex">

        <figure className="container">
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p id="h2">{this.state.quote}</p>
            <figcaption id="author">—{this.state.author}</figcaption>
          </blockquote>
          
        </figure>
        <Buttons handleSpeak={handleSpeak} handleNext={this.handleNext}/>
     
      </div>
    )
  }
}


export default App;


// todo: fetch the next image and set it 