import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Steps from '../components/Steps';
import Pics from '../components/Pics';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Question from '../components/Question';
import Footer from '../components/Footer';

import {initalProductList} from '../materials/itemList';
import {initalOrderList} from '../materials/itemList';
export const UserContext = React.createContext();


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: initalProductList,
            orderList: initalOrderList,
            makeOrder: false
        }
    }
    
    onHandleAddBox = (id) => {
        const productList = this.state.productList ;
        productList[`${id}`].numBox ++;
        this.setState({
            productList
        })
    }

    onHandleDeleteBox = (id) => {
        const productList = this.state.productList ;
        productList[`${id}`].numBox --;
        this.setState({
            productList
        })
    }

    onHandleAddBoxToCart = (id) => {
        const orderList = this.state.orderList;
        const productList = this.state.productList;
        orderList[`${id}`].order =+ productList[`${id}`].numBox;
        this.setState({
            orderList,
            makeOrder: true
        })
        setTimeout(()=> {console.log(orderList)}, 100)
        // Local Storage stuff 
    }
 
    resetOrder = () => {
        this.setState({
            orderList: initalOrderList,
            makeOrder: false
        });

    }
    render() {
        const {productList, orderList, makeOrder} = this.state;
        const {onHandleAddBox, onHandleDeleteBox, onHandleAddBoxToCart} = this;
        return (
            <div className="scrolling-box">
                <UserContext.Provider value={{productList, onHandleAddBox, onHandleDeleteBox, onHandleAddBoxToCart}}>
                    <Navbar 
                        orderList={orderList}
                        makeOrder={makeOrder}
                        resetOrder={this.resetOrder}
                    />
                    <Header />
                    <About />
                    <Steps />
                    <Pics />
                    <Products
                        productList={productList}
                    />
                    <Testimonials />
                    <Question />
                    <Footer />
                </UserContext.Provider>  
            </div>
        );
    }
}

export default HomePage;