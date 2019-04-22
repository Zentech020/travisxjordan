import React, { Component } from 'react';
import dripJ from '../images/dripJ.png';
import youngZentech from '../images/youngZentech.png';
import placeholder from '../images/placeholder.png';
import sherif from '../images/sherif.png';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <img src={sherif} className="abs-img abs-img--sherif" />
        <div className="container">
          <div className="row d-flex justify-content-center my-4">
            <div className="section__intro my-3">
              <h2 className="title text-center">WHO MADE THIS SHI*T</h2>
              <p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed lectus.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-sm">
              <div className="about__profile d-flex">
                <div className="about__profile__image mx-5">
                  <img src={dripJ} style={{ width: '100%' }} />
                </div>
                <div className="about__profile__description">
                  <h3>PIETER JANNICK DIJKSTRA</h3>
                  <span>SENIOR DROPBOX IMAGE EXPORTER</span>
                  <p>Proin magna. Etiam ultricies nisi vel augue. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aliquam lobortis.</p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="about__profile d-flex">
                <div className="about__profile__image mx-5">
                  <img src={youngZentech} style={{ width: '100%' }} />
                </div>
                <div className="about__profile__description">
                  <h3>ZENTECH</h3>
                  <span>ONLINE EVERYTHING GUY</span>
                  <p>Proin magna. Etiam ultricies nisi vel augue. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aliquam lobortis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;