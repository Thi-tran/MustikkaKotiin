import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="section-about pb-5" id="About"> 
                    <div className="row">
                        <h2 className="mx-auto">Meidän Tarinamme</h2>
                    </div>   
        
                    <div className="about-video">
                        <iframe src="https://player.vimeo.com/video/278542493" frameBorder="none" className="video-screen"></iframe>
                    </div>
                    
                    <div className="about-text">
                        <div className="long-text">
                        
                        <i>Uskomme, että kesä on parempi perheen kanssa 
                        <br/> <br/>
                        Teemme mustikoiden hankkimisen nopeaksi ja helpoksi, jotta sinulla olisi aikaa sille <br/> mikä elämässä on  olennaista</i>
                        </div>
                    </div>  
                </section>
            </div>
        );
    }
}

export default About;