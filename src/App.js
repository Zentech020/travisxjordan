import React, { Component, Fragment } from 'react';
import { Hero, Info, About, Poster, Stores, Signup, Preloader } from './Components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(function () {
      this.setState({ loading: false });
    }.bind(this), 5000)
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading
          ?
          (<Preloader />)
          :
          (
            <Fragment><Hero />
              <div id="border-bg">
                <Info />
                <Stores />
                <Poster />
                <About />
                <Signup />
              </div>
            </Fragment>)
        }
      </div>
    );
  }
}

export default App;
