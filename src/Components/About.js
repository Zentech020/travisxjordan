import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import dripJ from '../images/pj.png';
import youngZentech from '../images/zenno.png';
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
              <p className="text-center">A tribute to Travis Scott and the Hiphop and Sneaker culture.  </p>
            </div>
          </div>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row my-5">
              <div className="col-sm about__firstColumn">
                <div className="about__profile d-flex">
                  <div className="about__description col">
                    <center>
                      <img src={dripJ} />
                    </center>
                    <h3>PIETER JANNICK DIJKSTRA</h3>
                    <span className="about__tags">ART DIRECTION/DESIGN/ANIMATION/RAGER</span>
                    <div className="about__socials d-flex my-3">
                      <a target="_blank" href="https://www.instagram.com/pjayofficial/">
                        <img className="pr-3" src={insta} />
                      </a>
                      <a target="_blank" href="https://twitter.com/PJaYOfficial">
                        <img src={twitter} />
                      </a>
                    </div>
                    <p>Yoo! I'm Pieter Jannick a.k.a PJaY from Amsterdam a creative thinker, designer and illustrator from Amsterdam. Since I was a kid I've been I've always been fascinated with design, street/sneaker culture and Hiphop. </p>
                  </div>
                </div>
              </div>

              <div className="col-sm about__secondColumn">
                <div className="about__profile d-flex">
                  <div className="about__description col">
                    <center>
                      <img src={youngZentech} />
                    </center>
                    <h3>ZENTECH</h3>
                    <span className="about__tags">DEVELOPER/ONLINE EVERYTHING GUY</span>
                    <div className="about__socials d-flex my-3">
                      <a target="_blank" href="https://www.instagram.com/zennobruinsma/">
                        <img className="pr-3" src={insta} />
                      </a>
                      <a target="_blank" href="https://twitter.com/zentech__">
                        <img src={twitter} />
                      </a>
                    </div>
                    <p>
                      Yoo I’m Zenno Bruinsma born and raised in Amsterdam. I’ve been falling in love with programming and tech for a couple of years now. Building websites and apps on the regular as a freelancer. I'm also very into hiphop culture and love to combine this with programming.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    )
  }
}

export default About;