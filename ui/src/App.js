import React, { Component } from 'react';
import Products from './components/Products';
import ProductAdd from './components/ProductAdd';

class App extends Component {
  constructor (props){
    super(props);

    this.productDelete = this.productDelete.bind(this);

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
    
  }

  productDelete(id){
    let updatedProducts = this.state.products;

    updatedProducts = updatedProducts.filter(row => row.id !== id);

    this.setState({
      products: updatedProducts
    })

  }

  render() {
    return (
      <div className="App">
        <ProductAdd />
        <br/>
        <Products 
            productList = {this.state.products}
            productDelete ={this.productDelete} />
      </div>
    );
  }
}

export default App;
