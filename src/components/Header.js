import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

const items = [
    {
        img: 'img/back-customer.jpg'
    },
    {
        img: 'img/Meals/2.jpg'
    },
    {
        img: 'img/Meals/3.jpg'
    },
    {
        img: 'img/Meals/5.jpg'
    },
    {
        img: 'img/Meals/4.jpg'
    },
]
const Header = () => {
    return (
        <div className="" id="Home">
            <Carousel interval={5000}>
                {items.map((item, i) => <Item key={i} item={item} />)}
            </Carousel>
        </div>
    )
}

const Item = (props) => {
    return (
        <Paper>
            <header className="header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.514)),url(${props.item.img})` }}>
                <div className="hero-text-box">
                    <h1>Nauti Kesäisestä mausta kotonasi</h1>
                    <Scrollchor to="#Product" animate={{ offset: -50, duration: 600 }} className="btn btn-full">Tilaa</Scrollchor>
                </div>
            </header>
        </Paper>
    )
}

export default Header;