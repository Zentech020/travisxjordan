import React, { Component } from 'react';
import Client from 'shopify-buy';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import poster from '../images/poster.png';
import hoefIJzer from '../images/hoefijzer.png';
import splash from '../images/splash.png';

// Animations
import Fade from 'react-reveal/Fade';

const client = Client.buildClient({
  domain: 'travisxjordan.myshopify.com',
  storefrontAccessToken: '699011625f089da46ce7740c22a2296b'
});


class Poster extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkout: { lineItems: [] },
      products: [],
      features_collapse: false,
      shipping_collapse: false
    }
  }

  componentDidMount() {
    client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    client.product.fetch("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzIwNzI1MDM4MTIxOTM=").then((res) => {
      // Do something with the product

      console.log(res.variants);
      this.setState({
        products: res,
      });
    });
  }

  addPoster = () => {
    const lineItemsToAdd = [{ variantId: this.state.products.variants[0].id, quantity: 1 }];
    // Add an item to the checkout
    client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd).then((checkout) => {
      // Do something with the updated checkout
      console.log(checkout); // Array with one additional line item
      if (checkout.webUrl) {
        window.location.href = checkout.webUrl;
      }
    }).catch((err) => {
      alert('error');
      console.log(err);
    });
  }

  toggleFeatures = () => {
    this.setState(state => ({ features_collapse: !state.features_collapse }));
  }

  toggleShipping = () => {
    this.setState(state => ({ shipping_collapse: !state.shipping_collapse }));
  }

  render() {
    return (
      <section className="section poster" id="poster">
        <img src={hoefIJzer} className="abs-img abs-img--hoefijzer" />
        <img src={splash} className="abs-img abs-img--splash" />
        <div className="container poster">
          <div className="row d-flex justify-content-center my-3 text-center">
            <div className="section__intro my-3">
              <Fade bottom cascade>
              <p className="tagline text-center">POSTER</p>
              <h2 className="title">LIMITED FAN MADE POSTER</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                <h4 className="d-block d-sm-none">$28.42</h4>
                </Fade>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">
              <img src={poster} className="poster__image" />
              <div className="poster__gallery d-flex justify-content-around my-4">
                <div className="poster__gallery__card"></div>
                <div className="poster__gallery__card"></div>
                <div className="poster__gallery__card"></div>
              </div>
            </div>
            <div className="col-sm">
              <div className="poster__info">
              <Fade bottom cascade>

                <div className="poster__info__header">
                  <h3>DESCRIPTION</h3>
                  <h3 className="poster__info__price my-3">

                  </h3>
                </div>
                <p className="my-3">Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Donec mollis hendrerit risus. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.</p>
                <div className="poster__features d-flex justify-content-between py-2" onClick={() => this.toggleFeatures()}>
                  <p>Features</p>
                  {this.state.features_collapse ?
                    (
                      <p>&#9650;</p>
                    ) : (

                      <p>&#9660;</p>
                    )
                  }

                </div>
                <Collapse isOpen={this.state.features_collapse}>
                  <div className="poster__info__specs my-3">
                    <p>- 50 x 90 cm</p>
                    <p>- sicko quality print</p>
                    <p>- lit design</p>
                    <p>- at least you got the f*cking poster</p>
                  </div>
                </Collapse>
</Fade>
                <div className="poster__shipping d-flex justify-content-between py-2" onClick={() => this.toggleShipping()}>
                  <p>Shipping</p>
                  {this.state.features_collapse ?
                    (
                      <p>&#9650;</p>
                    ) : (

                      <p>&#9660;</p>
                    )
                  }
                </div>
                <Collapse isOpen={this.state.shipping_collapse}>
                  <div className="poster__info__specs my-3">
                    <p>Posters will be shipped within 2 weeks. The posters will be send in a tube. See shipping rates below</p>
                    <div className="mt-4">
                      <p>EU: 3-5 days, 10 euro</p>
                      <p>EU: 3-5 days, 10 euro</p>
                      <p>EU: 3-5 days, 10 euro</p>
                    </div>
                  </div>
                </Collapse>

                <div className="poster__info__order mt-5">
                  <p>$35.00</p>
                  <button onClick={() => this.addPoster()} className="btn btn--black">ORDER POSTER</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Poster;