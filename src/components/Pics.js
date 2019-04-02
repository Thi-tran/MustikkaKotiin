import React, { Component } from 'react';

class Pics extends Component {
    render() {
        return (
            <section className="section-meals" id="meals">
                <ul className="meals-showcase clearfix">
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/1.gif' alt="pic" />
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/2.jpg' alt="pic" />
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/3.jpg' alt="pic" />
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/4.jpg' alt="pic" />
                        </figure>
                    </li>
                </ul>
                <ul className="meals-showcase clearfix">
        
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/5.jpg' alt="pic" />
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/6.jpg' alt="pic" />
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/7.jpg' alt="pic"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src='img/Meals/8.jpg' alt="pic"/>
                        </figure>
                    </li>
                </ul>
            </section>        
        );
    }
}

export default Pics;