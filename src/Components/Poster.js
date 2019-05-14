import React, { Component } from 'react';
import Client from 'shopify-buy';
import ScrollAnimation from 'react-animate-on-scroll';

import { Collapse, Button, CardBody, Card } from 'reactstrap';
import poster from '../images/poster-design.jpg';
import hoefIJzer from '../images/hoefijzer.png';
import splash from '../images/splash.png';
import shoe from '../images/info-shoe.png';
import { relative } from 'path';


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
        <div className="hoefijzerContainer" style={{ position: 'absolute', overflow: 'hidden', height: '400px', width: '400px', right: '0' }} >
          <img src={hoefIJzer} className="abs-img abs-img--hoefijzer" />
        </div>
        <img src={splash} className="abs-img abs-img--splash" />
        <div className="container poster">
          <div className="row d-flex justify-content-center my-3 text-center">
            <div className="section__intro my-3">
              <p className="tagline text-center">POSTER</p>
              <h2 className="title">EVERYTHING YOU NEED TO KNOW</h2>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">
              <ScrollAnimation animateIn="fadeIn">
                <img src={poster} className="poster__image" />
              </ScrollAnimation >
            </div>
            <div className="col-sm">
              <div className="poster__info">
                <div className="poster__info__header">
                  <h3>DESCRIPTION</h3>
                  <h3 className="poster__info__price my-3">

                  </h3>
                </div>
                <p className="my-3">As a tribute to Travis his AJ1 we made this fan art. Click on the button below to get updates on when it will available. This is a fan made poster and is not affiliated with Nike, Jordan or Travis Scott</p>
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
                    <p>- A2 format</p>
                    <p>- Lit design</p>
                    <p>- Sicko quality print</p>
                    <p>- At least you got the f*cking poster</p>
                  </div>
                </Collapse>

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
                    <p>Shipping info tba</p>
                  </div>
                </Collapse>

                <div className="poster__info__order mt-5">
                  <a href="#signup" className="btn btn--black">I WANT A POSTER</a>
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