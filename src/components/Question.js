import React, { Component } from 'react';
import mePic from '../styles/img/me.jpg';
class Question extends Component {
    render() {
        return (
            <section className="section-question pb-5" id="Question">
                <div className="row">
                    <h2 className="mx-auto">Kysymys</h2>
                </div>
                
                <div className="row">
                    <div className="span-1-of-3">
                        <img src={mePic} className="question-picture ml-5" />
                    </div>

                    <div className="span-2-of-3">
                        <form method="post" action="#" className="contact-form">
                            <div className="row mb-2">
                                <div className="span-1-of-3">
                                    <input type="text" name="name" id="name" placeholder="Nimi" required />
                                </div>

                                <div className="span-2-of-3 ml-2">
                                    <input type="email" name="email" id="email" placeholder="Sähköposti" required /> 
                                </div>
                            </div>

                            <div className="row">
                                <textarea name="message" id="message" placeholder="Kysymys" required></textarea>
                            </div>

                            <div className="row send-btn">
                                <div className="col span-2-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                
                                <div className="col span-1-of-3">
                                    <input type="submit" value="Laheta" className="btn btn-primary"/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Question;