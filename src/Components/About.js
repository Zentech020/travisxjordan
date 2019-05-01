import React, { Component } from 'react';
import dripJ from '../images/dripJ.png';
import youngZentech from '../images/youngZentech.png';
import placeholder from '../images/placeholder.png';
import sherif from '../images/sherif.png';
import insta from '../images/insta-icon1.png';
import twitter from '../images/twitter-icon1.png';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <img src={sherif} className="abs-img abs-img--sherif d-none d-sm-block" />
        <div className="container">
          <div className="row d-flex justify-content-center my-4">
            <div className="section__intro my-3">
              <h2 className="title text-center">WHO MADE THIS SHI*T</h2>
              <p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed lectus.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-sm mr-5">
              <div className="about__profile d-flex">
                <div className="about__profile__description">
                  <center>
                    <img src={dripJ} />
                  </center>
                  <h3>PIETER JANNICK DIJKSTRA</h3>
                  <span>SENIOR DROPBOX IMAGE EXPORTER</span>
                  <div className="d-flex my-3">
                    <a target="_blank" href="https://www.instagram.com/champagnepapi/">
                      <img className="pr-3" src={insta} />
                    </a>
                    <a href="#">
                      <img src={twitter} />
                    </a>
                  </div>
                  <p>Hi I am Pieter and I pretend to be from Amsterdam but secretely born in Den Hillah Etiam ultricies nisi vel augue. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aliquam lobortis.</p>
                </div>
              </div>
            </div>

            <div className="col-sm ml-5">
              <div className="about__profile d-flex">
                <div className="about__profile__description">
                  <center>
                    <img src={youngZentech} />
                  </center>
                  <h3>ZENTECH</h3>
                  <span>ONLINE EVERYTHING GUY</span>
                  <div className="d-flex my-3">
                    <a href="#">
                      <img className="pr-3" src={insta} />
                    </a>
                    <a href="#">
                      <img src={twitter} />
                    </a>
                  </div>
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