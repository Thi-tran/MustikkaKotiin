import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {productList} = this.props;

        return (
            <section className="section-product" id="Product">
                <div className="row">
                    <h2 className="mx-auto">Hakea Teidän marjat</h2>
                </div>

                <div className="row">
                    {productList.map((product) => (
                        <Product 
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
  
export default Products;