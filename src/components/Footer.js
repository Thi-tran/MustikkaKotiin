import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <ul className="footer-nav mx-auto">
                        {/* <li className="nav-item">
                            <Scrollchor to="#About" animate={{ offset: -50, duration: 600 }} className="nav-text">Tarina</Scrollchor>
                        </li> */}
                        <li className="nav-item">
                            <Scrollchor to="#Contact" animate={{ offset: -50, duration: 600 }} className="nav-text">Ohje</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#Product" animate={{ offset: -50, duration: 600 }} className="nav-text">Mustikat</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#Testimonial" animate={{ offset: -50, duration: 600 }} className="nav-text">Kokemuksia</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#Question" animate={{ offset: -50, duration: 600 }} className="nav-text">Yhteydenotto</Scrollchor>
                        </li>
                    </ul>
                </div>

                <div className="row">
                    <ul className="footer-icon-list mx-auto">
                        <li><a href="https://www.facebook.com/mustikkakotiin"><ion-icon name="logo-facebook" className="icon-facebook"></ion-icon></a></li>
                    </ul>
                </div>
                <div className="d-flex justify-content-around pb-2">
                    <div className="footer-text">©2022 by MustikkaKotiin</div>
                    <div className="footer-text">All data is protected under GDPR </div>
                </div>
            </footer>
        );
    }
}

export default Footer;