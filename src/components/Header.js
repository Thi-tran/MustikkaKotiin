import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Header extends Component {
    render() {
        return (
            <div className="" id="Home">
                <header className="header">
                    <div className="hero-text-box">
                        <h1>Nauti Kesäisestä mausta kotonasi</h1>
                        <Scrollchor to="#Product" animate={{ offset: -50, duration: 600 }} className="btn btn-full">Tilaa mustikoita </Scrollchor>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;