import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <ul className="footer-nav mx-auto">
                        <li><a href="#reason">Tarina</a></li>
                        <li><a href="#step">Tilaa</a></li>
                        <li><a href="#testimonial">Muistoottelu</a></li>
                        <li><a href="#question">Kysymys</a></li>
                    </ul>
                </div>
                
                <div className="row">
                    <ul className="footer-icon-list mx-auto">
                        <li><a href="#"><ion-icon name="logo-facebook" className="icon-facebook"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-instagram" className="icon-insta"></ion-icon></a></li>
                    </ul>
                </div>
                <div className="d-flex justify-content-around pb-2">
                    <div className="footer-text">©2018 by MustikkaKotiin (Y-tunnus: 2840945-7)</div>
                    <div className="footer-text">All data is protected under GDPR </div>
                </div>
            </footer>        
        );
    }
}

export default Footer;