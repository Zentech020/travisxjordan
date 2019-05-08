import React, { Component, Fragment } from 'react';
import Parallax from 'parallax-js'
import heroShoe from '../images/hero/shoe.png';
import cactusJackLogo from '../images/cactus-jack-logo.png';
import jordanLogo from '../images/jordan-logo.png';
import nikeLogo from '../images/nike-logo.png';
import smiley from '../images/smiley.png';
import sign from '../images/hero/bord.png';
import moon from '../images/moon.png';
import cactusLeft from '../images/hero/cactus-left.png';
import cactusRight from '../images/hero/cactus-right.png';
import cactusLittle from '../images/hero/cactus-small.png';
import flames from '../images/flame.png';
import cactusMain from '../images/hero/cactus-main.png';
import skeleton from '../images/hero/skeleton.png';
import heroBg from '../images/hero/heroBg.png';
import cloud1 from '../images/hero/cloud1.png';
import cloud2 from '../images/hero/cloud2.png';
import cloud3 from '../images/hero/cloud3.png';
import jet from '../images/hero/jet.png';
import bird from '../images/bird.png';
import posterSmall from '../images/poster-small.png';

class Hero extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var scene = document.getElementById('hero');
    var parallaxInstance = new Parallax(scene, {
      clipRelativeInput: true
    });
  }

  render() {
    return (
      <div className="hero" id="hero" data-relative-input="true" data-depth="0.5">
        <div className="container">
          <div className="hero__topBar text-center">
            <p className="d-block d-sm-none">This is an fan project and is not affiliated with Nike, Jordan or Travis Scott</p>
            <p className="d-none d-sm-block">This fan project is made by <a target="_blank" href="https://www.instagram.com/pjayofficial/">@pjayofficial</a> & <a target="_blank" href="https://www.instagram.com/zennobruinsma/" >@zentech__</a> and is not affiliated with Nike , Jordan or Travis Scott </p>
          </div>

          <div className="hero__mobile-menu">
            <a href="">INFO</a>
            <a href="">STORES</a>
            <a href="">POSTER</a>
            <a href="">ABOUT</a>

          </div>
          <div className="hero__top">
            <div className="menu">
              <a className="menu__info" href="#">INFO</a>
              <a className="menu__about" href="#">ABOUT</a>
            </div>
            <h1 className="hero__title" data-depth="0.2">TRAVIS SCOTT AIR JORDAN.</h1>
            <div className="menu">
              <a className="menu__order" href="#">ORDER POSTER</a>
              <a className="menu__retailer" href="#">RETAILERS</a>
            </div>
            <img src={smiley} className="attribute attribute--smiley" />
            <p className="attribute attribute--brushText">MAY 11TH</p>


          </div>
          <div className="hero__middle">
            <div className="row">
              <div className="col-sm-3 hero__middle__content">
                <p>The Cactus Jack Air Jordan 1 by Hiphop artist and label founder Travis Scott.</p>
                <a href="#" className="btn btn--white">MORE INFO</a>
              </div>
              <div className="hero__middle__shoe col-sm-6">

              </div>
              <div className="hero__middle__content col-sm-3 ">
                <p>Want to know where it drops?</p>
                <a href="#" className="btn btn--black">MORE INFO</a>
              </div>
            </div>
          </div>
        </div>

        <img src={moon} className="attribute attribute--moon" />
        <img src={heroBg} className="attribute attribute--heroBg" data-depth="0.1" />
        <img src={cactusLittle} data-depth="0.05" className="attribute attribute--cactus-little" />
        <img src={jet} className="attribute attribute--jet" />
        <img src={bird} className="attribute attribute--bird" />

        <img src={cloud1} className="attribute attribute--cloud"></img>
        <img src={cloud2} className="attribute attribute--cloud-1"></img>
        <img src={cloud3} className="attribute attribute--cloud-2"></img>

        <div className="board">
          <img src={sign} className="attribute attribute--sign" data-depth="0.05" />
          <img src={posterSmall} className="attribute attribute--poster" />
        </div>


        <div className="cactus" data-depth="0.2">
          <img src={heroShoe} className="attribute attribute--shoe" />
          <img src={cactusMain} className="attribute attribute--cactus" />
          <img src={cactusRight} className="attribute attribute--cactus-right" />
          <img src={cactusLeft} className="attribute attribute--cactus-left" />
          <img src={skeleton} className="attribute attribute--skeleton" />
          <img src={flames} className="attribute attribute--flame-right" />
          <img src={flames} className="attribute attribute--flame-left" />
          <img src={flames} className="attribute attribute--flame-by-left-top" />
          <img src={flames} className="attribute attribute--flame-by-right-top" />
        </div>
      </div >
    )
  }
}

export default Hero;