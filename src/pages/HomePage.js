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
import SnackBar from '../components/SnackBar';
import {initalProductList} from '../materials/itemList';
import {initalOrderList} from '../materials/itemList';
export const UserContext = React.createContext();


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: initalProductList,
            orderList: initalOrderList,
            makeOrder: '',
            savedOrder : '',
        }
    }
    componentDidMount() {
        const localMakeOrder = localStorage.getItem('savedOrder');

        let makeOrder = false;
        let savedOrder = false;
        if (localMakeOrder === "true") {
            makeOrder = true;
            savedOrder = true;
        } 

        const orderList = this.state.orderList;

        // loop over products to find how much boxes are ordered in each prod
        for (let i = 0; i < orderList.length ; i ++ ){
            orderList[i].order = localStorage.getItem(`order-${i}`);
        }

        this.setState({
            makeOrder,
            savedOrder,
            orderList
        });

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
        localStorage.setItem('savedOrder', true);
        localStorage.setItem(`order-${id}`,productList[`${id}`].numBox);
    }
 
    resetOrder = () => {
        this.setState({
            orderList: initalOrderList,
            makeOrder: false
        });

        localStorage.setItem('savedOrder', false);

    }
    render() {
        const {productList, orderList, makeOrder, savedOrder} = this.state;
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

                {savedOrder && <SnackBar 
                    open={savedOrder}
                    message="Let's finish your order :)"
                    variant="info"
                    vertical="bottom"
                    horizontal="right"
                />}
            </div>
        );
    }
}

export default HomePage;