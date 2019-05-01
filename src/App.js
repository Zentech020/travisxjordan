import React, { Component } from 'react';
import { Hero, Info, About, Poster, Stores, Signup } from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <div id="border-bg">
          <Info />
          <Stores />
          <Poster />
          <About />
          <Signup />
        </div>
      </div>
    );
  }
}

export default App;
