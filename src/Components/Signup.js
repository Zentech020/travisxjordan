import React, { Component } from 'react';
import bordFooter from '../images/signup/bord-footer.png';
import coins from '../images/signup/coins.png';
import mrSkeleton from '../images/signup/mrSkeleton.png';
import flames from '../images/flame.png';
import tokens from '../images/signup/tokens.png';

class Signup extends Component {
  render() {
    return (
      <section id="signup" className="section">
        <div className="container signup">
          <img src={bordFooter} className="abs-img abs-img--bordFooter" />
          <img sc={tokens} className="abs-img abs-img--coins" />
          <img src={mrSkeleton} className="abs-img abs-img--mrSkeleton" />
          <img src={flames} className="abs-img abs-img--flameLeft" />
          <img src={flames} className="abs-img abs-img--flameRight" />
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="signup__subscribe d-flex flex-column align-items-center justify-content-between text-center">
                <div>
                  <h4>Howdy! Wanna stay updated on future projects?</h4>
                  <p>We’re not done yet. Leave your e-mail behind to get updates</p>
                </div>
                <input type="text" />
                <a href="#" className="btn btn--black">ORDER POSTER</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Signup;