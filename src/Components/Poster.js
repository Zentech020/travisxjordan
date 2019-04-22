import React, { Component } from 'react';
import Client from 'shopify-buy';
import poster from '../images/poster.png';
import hoefIJzer from '../images/hoefijzer.png';
import splash from '../images/splash.png';

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
  render() {
    return (
      <section className="section poster" id="poster">
        <img src={hoefIJzer} className="abs-img abs-img--hoefijzer" />
        <img src={splash} className="abs-img abs-img--splash" />
        <div className="container poster">
          <div className="row d-flex justify-content-center my-3">
            <div className="section__intro my-3">
              <h2 className="title">LIMITED FAN MADE POSTER</h2>
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
                <div className="poster__info__header">
                  <h3>LIMITED TRAVIS SCOTT X AIR JORDAN 1 POSTER</h3>
                  <h3 className="poster__info__price my-3">

                  </h3>
                </div>
                <p className="my-3">Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Donec mollis hendrerit risus. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.</p>
                <div className="poster__info__specs my-3">
                  <p>- 50 x 90 cm</p>
                  <p>- sicko quality print</p>
                  <p>- lit design</p>
                  <p>- at least you got the f*cking poster</p>
                </div>
                <div className="poster__info__order">
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