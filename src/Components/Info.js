import React, { Component } from 'react';
import infoShoe from '../images/info-shoe.png';
import markShoe from '../images/mark-shoe.png';
import travis1 from '../images/travis-1.png';
import travis2 from '../images/travis-2.png';
import travis3 from '../images/travis-3.png';
import galleryShoe from '../images/gallery-shoe.png';
import smiley from '../images/smiley.png';
import cactus from '../images/cactus-illustration.png';
import momText from '../images/mom-text.png';
import sand from '../images/sand.png';

class Info extends Component {
  render() {
    return (
      <section id="info" className="section">
        <div className="container info">
          <div className="section__intro d-flex flex-column align-items-center">
            <h2 className="title">TRAVIS SCOTT X AIR JORDAN 1</h2>
            <p>Lorem ipsum dolor st amet, consectuer adeputhtunf wijidj disj </p>
          </div>
          <div className="row">
            <div className="info__shoe col-sm d-flex justify-content-center">
              <img src={infoShoe} />
              <img src={markShoe} className="shoe-mark shoe-mark--1" />
              <img src={markShoe} className="shoe-mark shoe-mark--2" />
              <img src={markShoe} className="shoe-mark shoe-mark--3" />
            </div>
          </div>
          <div className="row d-flex justify-content-end my-3">
            <div class="col-sm info__content">
              <h4>LIMITED TRAVIS SCOTT X AIR JORDAN 1 POSTER</h4>
              <p className="mt-2">Fusce convallis metus id felis luctus adipiscing. Vestibulum ullamcorper mauris at ligula. Curabitur suscipit suscipit tellus.</p>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="info__gallery">
              <img src={galleryShoe} className="info__gallery__shoe" />
              <img src={smiley} className="gallery_obj gallery_obj--1" />
              <img src={travis1} className="gallery_obj gallery_obj--2" />
              <img src={travis2} className="gallery_obj gallery_obj--3" />
              <img src={travis3} className="gallery_obj gallery_obj--4" />
              <img src={cactus} className="gallery_obj gallery_obj--5" />
              <img src={momText} className="gallery_obj gallery_obj--6" />
              <img src={sand} className="gallery_obj gallery_obj--7" />
            </div>
          </div>
          <div className="row">
            <div className="info__description col">
              <p>Phasellus gravida semper nisi. Fusce a quam. Integer tincidunt. Phasellus accumsan cursus velit.
              Suspendisse potenti. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Phasellus a est. Vestibulum ullamcorper mauris at ligula. Etiam rhoncus.
              In ut quam vitae odio lacinia tincidunt. Nunc nonummy metus. Vivamus quis mi. Sed libero.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Info;