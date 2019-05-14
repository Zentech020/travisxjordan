import React, { Component } from 'react'

class Disclaimer extends Component {
  render() {
    return (
      <section className="disclaimer">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <div style={{ width: '75%', margin: "0 auto", }}>
                <h5>Disclaimer:</h5>
                <br />
                <p>This is a fan project and shoudn’t been taken serious. The design, content and imagery is just our interpretation and may differ from the real product.  We’re not affiliated with Nike, Air Jordan, Travis Scott or Cactus Jack.</p>
                <br />
                <p>Astroworld Logo, Look Mom I Can Fly are products of Travis Scott/Cactus Jack. Nike Swoosh is a product of Nike</p>
                <br />
                <p>All love - Outofctrl</p>
                <br />
                <span>Contact: <a href="mailto:holla@outofctrl.work">holla@outofctrl.work</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Disclaimer;