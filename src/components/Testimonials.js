import React, { Component } from 'react';
class Testimonials extends Component {
    render() {
        return (

            <section className="section-testimonial" id="Testimonial">
                <div className="row js--wp-3">
                    <h2 className="mx-auto">Mitä asiakkamme sanovat</h2>
                </div>
                
                <div className="row">
                    <div className="col span-1-of-3">
                        <blockquote>
                        <div className="testimonial-text"><i> I am also very happy for the whole process. Thi was fast to reply to my questions, blueberries were cleaned as advertised, delivered on time and blueberries are delicious. I have some more room in a freezer...maybe I buy some more </i>😀</div>
                        <div className="testimonial-name">
                            <img src='img/Testimonials/Heidi.jpg' className="testimonial-photo" />
                            <p>&mdash; Heidi</p>
                        </div>
                        </blockquote>
                    </div>
                    <div className="col span-1-of-3">
                        <blockquote>
                        <div className="testimonial-text"><i>Superb berries and friendly </i></div>
                        <div className="testimonial-name">
                            <img src='img/Testimonials/Kimmo.jpg' className="testimonial-photo" />
                            <p>&mdash; Kimmo</p>
                        </div>
                        </blockquote>
                    </div>
                    <div className="col span-1-of-3">
                        <blockquote>
                        <div className="testimonial-text"><i>We got a nice huge batch of blueberries today. I'm very happy with everything. After making a pie, cooking some jam, freezing a bit and eating quite a lot of them, I need to figure out what to do with all the remaining blueberries! Thanks guys for giving me a problem I never thought I'd have while here in Finland</i></div>
                        <div className="testimonial-name">
                            <img src='img/Testimonials/Juliane.jpg' className="testimonial-photo" />
                            <p>&mdash;  Juliane</p>
                        </div>
                        </blockquote>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;