import React, { Component } from 'react';
import snkrs from '../images/snkrs.png';
import stockx from '../images/stockx.png';
import klekt from '../images/klekt.png';
import bag from '../images/bag.png';

// Animations
import Fade from 'react-reveal/Fade';


class Sotres extends Component {
  render() {
    return (
      <section id="stores" className="section">
        <div className="container stores">
          <img src={bag} className="stores__bag" />
          <div className="section__intro d-flex flex-column align-items-center">
          <Fade bottom cascade>
            <p className="tagline">Stores</p>
            <h2 className="title">WHERE TO COP</h2>
              <p>Lorem ipsum dolor st amet, consectuer adeputhtunf wijidj disj </p>
              </Fade>
          </div>
          <div className="row">
            <div class="col-sm">
              <div class="stores__brand d-flex justify-content-between align-items-center">
              <Fade bottom cascade>
                <img src={snkrs} />
                <img src={stockx} />
                  <img src={klekt} />
                  </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sotres;