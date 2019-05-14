import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import bordFooter from '../images/signup/bord-footer.png';
import coins from '../images/signup/coins.png';

import mrSkeleton from '../images/signup/mrSkeleton.png';
import flames from '../images/flame.png';
import tokens from '../images/signup/tokens.png';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyc1rvSQz8HDN9rU' }).base('appzcdJiKTrUd3AwL');



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = () => {
    base('Emails').create({ "Email": this.state.value }, (err, record) => {
      if (err) {
        this.setState({ message: "Something went wrong" });
      }
      // else {
      //   this.setState({ message: "Thanks we'll get back to you soon!" });
      // }
      this.setState({ message: "Thanks we'll get back to you soon!" });
    });
  }

  render() {
    return (
      <section id="signup" className="section">
        <ScrollAnimation animateIn="fadeIn">
          <div className="container signup">
            <img src={bordFooter} className="abs-img abs-img--bordFooter" />
            <img sc={tokens} className="abs-img abs-img--coins" />
            <img src={mrSkeleton} className="abs-img abs-img--mrSkeleton" />
            <img src={flames} className="abs-img abs-img--flameLeft" />
            <img src={flames} className="abs-img abs-img--flameRight" />
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-12">
                <div className="signup__subscribe d-flex flex-column align-items-center justify-content-between text-center">
                  <div>
                    <h4>HOWDY! INTERESTED IN GETTING A POSTER AND FUTURE PROJECTS?</h4>
                    <p>Leave your e-mail behind to get updates</p>
                  </div>
                  <input value={this.state.value} onChange={(event) => this.handleChange(event)} type="text" placeholder="cactus.jack@gmail.com" />
                  <button onClick={this.handleSubmit} className="btn btn--black">SUBSCRIBE</button>
                  <span>{this.state.message}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    )
  }
}

export default Signup;