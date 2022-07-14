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
import { initalProductList } from '../materials/itemList';
import { initalOrderList } from '../materials/itemList';
export const UserContext = React.createContext();


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: JSON.parse(JSON.stringify(initalProductList)),
            orderList: JSON.parse(JSON.stringify(initalOrderList)),
            makeOrder: '',
            savedOrder: '',
            addOrderToCart: false,
        }
    }
    componentDidMount() {
        const localMakeOrder = (localStorage.getItem('savedOrder') === "true");

        let makeOrder = localMakeOrder;
        let savedOrder = localMakeOrder;

        const orderList = this.state.orderList;

        // loop over products to find how much boxes are ordered in each prod
        for (let i = 0; i < orderList.length; i++) {
            orderList[i].order = localStorage.getItem(`order-${i}`);
        }

        this.setState({
            makeOrder,
            savedOrder,
            orderList
        });

    }

    onHandleAddBox = (id) => {
        const productList = [...this.state.productList];
        productList[`${id}`].numBox++;
        this.setState({
            productList
        })
    }

    onHandleDeleteBox = (id) => {
        const productList = [...this.state.productList];
        if (productList[`${id}`].numBox > 0) {
            productList[`${id}`].numBox--
        }
        this.setState({
            productList
        })
    }

    onHandleAddBoxToCart = (id) => {
        const { orderList, productList } = this.state;

        orderList[`${id}`].order = Number(orderList[`${id}`].order) + Number(productList[`${id}`].numBox);
        this.setState({
            orderList,
            makeOrder: true,
            addOrderToCart: true
        })
        // Local Storage stuff
        localStorage.setItem('savedOrder', true);
        localStorage.setItem(`order-${id}`, productList[`${id}`].numBox);
    }

    resetOrder = () => {
        this.setState({
            orderList: JSON.parse(JSON.stringify(initalOrderList)),
            productList: JSON.parse(JSON.stringify(initalProductList)),
            makeOrder: false
        });

        localStorage.setItem('savedOrder', false);
    }

    render() {
        const { productList, orderList, makeOrder, savedOrder, addOrderToCart } = this.state;
        const { onHandleAddBox, onHandleDeleteBox, onHandleAddBoxToCart } = this;

        let displaySaveOrder = false;
        if (savedOrder === "true") displaySaveOrder = true;

        return (
            <div className="scrolling-box">
                <UserContext.Provider value={{ productList, onHandleAddBox, onHandleDeleteBox, onHandleAddBoxToCart }}>
                    <Navbar
                        orderList={orderList}
                        makeOrder={makeOrder}
                        resetOrder={this.resetOrder}
                    />
                    <Header />
                    {/* <About /> */}
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
                    open={displaySaveOrder}
                    message="Suorita tilauksesi :)"
                    variant="info"
                    vertical="bottom"
                    horizontal="right"
                />}

                {addOrderToCart && <SnackBar
                    open={addOrderToCart}
                    message="Tilaus lisätään"
                    variant="success"
                    vertical="top"
                    horizontal="right"
                />}
            </div>
        );
    }
}

export default HomePage;