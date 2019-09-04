import React, { Component } from 'react';
import Products from './components/Products';
import ProductAdd from './components/ProductAdd';
import ProductModal from './components/ProductModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // buradaki state ismi setState içindeki parametreden geliyor. 
      // Bu nedenle farklı isim verilemiyor.
      products: [
        {
          id: 1,
          name: "elma",
          count: 3
        },
        {
          id: 2,
          name: "armut",
          count: 7
        },
        {
          id: 3,
          name: "karpuz",
          count: 5
        }
      ]
    }

    this.productDelete = this.productDelete.bind(this);
    this.productAdd = this.productAdd.bind(this);

  }

  productDelete(id) {
    let updatedProducts = this.state.products;

    updatedProducts = updatedProducts.filter(row => row.id !== id);

    this.setState({
      products: updatedProducts
    })

  }

  productAdd(productObj) {
    let updatedProducts = this.state.products;

    updatedProducts.push(productObj);

    this.setState({
      products: updatedProducts
    })

  }

  render() {
    return (
      <div className="App">
        <hr />
        <ProductModal productAdd={this.productAdd}/>
        <br />
        
        <br />
        <Products
          productList={this.state.products}
          productDelete={this.productDelete} />
      </div>
    );
  }
}

export default App;
