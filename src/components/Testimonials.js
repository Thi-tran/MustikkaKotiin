import React, { Component } from 'react';
class Testimonials extends Component {
  render() {
    return (
      <section className="section-testimonial" id="Testimonial">
        <div className="row js--wp-3">
          <h2 className="mx-auto">Mitä asiakkamme sanovat</h2>
        </div>
        <div className="row testimonial-container">
          <div className="col testimonial-box mx-auto">
            <blockquote>
              <div className="testimonial-text"><i>Mainio palvelu! Nopea toimitus kotiovelle asti, ja hyvälaatuiset ja hyvin puhdistetut marjat. Herkullisia, nam! Suosittelen!</i></div>
              <div className="testimonial-name">
                <img src='img/Testimonials/Kati.jpg' className="testimonial-photo" alt="Juliane" />
                <p> Kati</p>
              </div>
            </blockquote>
          </div>
          <div className="col testimonial-box mx-auto">
            <blockquote>
              <div className="testimonial-text"><i>Superb berries and friendly </i></div>
              <div className="testimonial-name">
                <img src='img/Testimonials/Kimmo.jpg' className="testimonial-photo" alt="kimmo" />
                <p> Kimmo</p>
              </div>
            </blockquote>
          </div>
          <div className="col testimonial-box mx-auto">
            <blockquote>
              <div className="testimonial-text"><i> I am also very happy for the whole process. Thi was fast to reply to my questions, blueberries were cleaned as advertised, delivered on time and blueberries are delicious. I have some more room in a freezer...maybe I buy some more </i><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">😀</span> </div>
              <div className="testimonial-name">
                <img src='img/Testimonials/Heidi.jpg' className="testimonial-photo" alt="heidi" />
                <p> Heidi</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;