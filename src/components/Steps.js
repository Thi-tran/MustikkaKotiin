import React, { Component } from 'react';
import step1 from '../styles/img/step1.jpeg';
import step2 from '../styles/img/step2.jpeg';
import step3 from '../styles/img/step3.jpeg';
class Steps extends Component {
    render() {
        return (
            <section className="section-steps" id="Contact">
                <div className="row">
                    <h2 className="mx-auto">Kuinka se toimii</h2>
                </div>
                
                <div className="row steps-container">
                    <div className="col">
                        <img src={step1} alt="step-1" className="step-pic" />
                        <p className="step-text">Tilaa mustikoita netistä</p>
                    </div>
                    <div className="col">
                        <img src={step2} alt="step-1" className="step-pic" />
                        <p className="step-text">Rentoudu sillä välin kun mustikat <br/> tuodaan kotiisi 1 - 3 päivässä</p>
                    </div>
                    <div className="col">
                        <img src={step3} alt="step-1" className="step-pic" />
                        <p className="step-text">Nauti kesäisestä mausta <br/>  perheesi kanssa</p>
                    </div>
                </div>
            </section>        
        );
    }
}

export default Steps;