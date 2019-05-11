import React, { Component } from 'react';
import snkrs from '../images/nike-logo.png';
import offspring from '../images/offspring.png';
import sneakerstuff from '../images/sneakerstuff.png';
import end from '../images/end.png';
import solebox from '../images/solebox.png';
import oqium from '../images/oqium.png';
import bag from '../images/bag.png';
import secure_bag from '../images/secure_the_bag.png';

class Sotres extends Component {
  render() {
    return (
      <section id="stores" className="section">
        <img src={secure_bag} className="stores__bag" />
        <div className="container stores">
          <div className="section__intro d-flex flex-column align-items-center">
            <p className="tagline">Raffles</p>
            <h2 className="title">WHERE TO COP</h2>
            <p>The Travis scott AJ1 will be available at selected retailers</p>
          </div>
          <div className="row mt-5">
            <div class="col-sm">
              <div class="stores__brand d-flex justify-content-between align-items-center">
                <img src={snkrs} />
                <img src={offspring} />
                <img src={sneakerstuff} />
              </div>

              <div class="stores__brand d-flex justify-content-between align-items-center mt-5" style={{ marginBottom: '85px' }}>
                <img src={end} />
                <img src={solebox} />
                <img src={oqium} />
              </div>
              <div className="d-flex justify-content-center">
                <a href="https://hypebeast.com/2019/4/travis-scott-air-jordan-1-high-og-apparel-collection-store-list" target="_blank" className="btn btn--black">
                  SEE FULL STORE LIST
              </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Sotres;