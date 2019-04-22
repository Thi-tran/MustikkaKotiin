import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    render() {
        const {productList} = this.props;

        return (
            <section className="section-product" id="Product">
                <div className="row">
                    <h2 className="mx-auto">Toimitamme Marjat Kotiin</h2>
                </div>

                <div className="row card-container">
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