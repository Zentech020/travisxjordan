import React, { Component } from 'react'
import { ReactComponent as Loader } from '../images/loader.svg';

class Preloader extends Component {
  render() {
    return (
      <div className="preloader d-flex justify-content-center align-items-center">
        <Loader className='preloader__svg' ariaLabel='logo' />
      </div>
    )
  }
}

export default Preloader;
