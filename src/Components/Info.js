import React, { Component } from "react";
import infoShoe from "../images/info-shoe.png";
import markShoe from "../images/mark-shoe.png";
import travis1 from "../images/travis-1.png";
import travis2 from "../images/travis-2.png";
import travis3 from "../images/travis-3.png";
import galleryShoe from "../images/gallery-shoe.png";
import smiley from "../images/smiley.png";
import cactus from "../images/cactus-illustration.png";
import momText from "../images/mom.png";
import sand from "../images/sand.png";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";

class Info extends Component {
  render() {
    return (
      <section id="info" className="section">
        <div className="container info">
          <div className="section__intro d-flex flex-column align-items-center text-center">
            <Roll>
              <p className="tagline">INFO</p>
            </Roll>
            <h2 className="title">TRAVIS SCOTT X AIR JORDAN 1</h2>
            <p>
              Lorem ipsum dolor st amet, consectuer adeputhtunf wijidj disj{" "}
            </p>
          </div>
          <div className="row">
            <div className="info__shoe col-sm d-flex justify-content-center">
              <Zoom top>
                <img className="infoShoe" src={infoShoe} />
              </Zoom>
              <RubberBand>
                <img src={markShoe} className="shoe-mark shoe-mark--2" />
              </RubberBand>
              <RubberBand>
                <img src={markShoe} className="shoe-mark shoe-mark--1" />
              </RubberBand>
              <RubberBand>
                <img src={markShoe} className="shoe-mark shoe-mark--3" />
              </RubberBand>
              <div className="d-none d-sm-block">
                <p className="shoe-tips shoe-tips--1">SECTRET STASH</p>
                <img src={arrowRight} className="shoe-arrow shoe-arrow--1" />
                <p className="shoe-tips shoe-tips--2">REVERSED SWOOSH</p>
                <img src={arrowRight} className="shoe-arrow shoe-arrow--2" />
                <p className="shoe-tips shoe-tips--3">HIGH QUALITY LEATHER</p>
                <img src={arrowLeft} className="shoe-arrow shoe-arrow--3" />
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-end my-3">
            <div className="col-sm info__content">
              <Roll>
                <h4>LIMITED TRAVIS SCOTT X AIR JORDAN 1 POSTER</h4>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Roll>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="info__gallery">
              <img
                src={galleryShoe}
                className="info__gallery__shoe d-none d-sm-block"
                alt="none"
              />
              <div className="info__gallery__mobile-composition">
                <Roll>
                  <img src={smiley} className="gallery_obj gallery_obj--1" />
                </Roll>
                <Roll>
                  <img src={travis1} className="gallery_obj gallery_obj--2" />
                </Roll>
                <Roll>
                  <img src={travis2} className="gallery_obj gallery_obj--3" />
                </Roll>
                <Roll>
                  <img src={travis3} className="gallery_obj gallery_obj--4" />
                </Roll>
                <RubberBand>
                  <img src={cactus} className="gallery_obj gallery_obj--5" />
                </RubberBand>
                <img src={momText} className="gallery_obj gallery_obj--6" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="info__description col">
              <h4>LIMITED TRAVIS SCOTT X AIR JORDAN 1 POSTER</h4>
              <p>
                Phasellus gravida semper nisi. Fusce a quam. Integer tincidunt.
                Phasellus accumsan cursus velit. Suspendisse potenti. Proin
                sapien ipsum, porta a, auctor quis, euismod ut, mi. Phasellus a
                est. Vestibulum ullamcorper mauris at ligula. Etiam rhoncus. In
                ut quam vitae odio lacinia tincidunt. Nunc nonummy metus.
                Vivamus quis mi. Sed libero.
              </p>
              <img
                src={galleryShoe}
                className="info__gallery__shoe d-block d-sm-none"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
