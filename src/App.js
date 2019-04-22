import React, { Component } from 'react';
import { Hero, Info, About, Poster } from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <div id="border-bg">
          <Info />
          <Poster />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
