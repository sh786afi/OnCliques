import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { storeProducts } from "../../data";
class ProductContainer extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.setState({ products: storeProducts });
    console.log(this.state.products);
  }
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default ProductContainer;
