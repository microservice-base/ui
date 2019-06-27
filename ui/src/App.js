import React, { Component } from 'react';
import Product from "./components/Product";
import Products from './components/Products';

class App extends Component {
  constructor (props){
    super(props);

    this.productsState = {
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
        }
      ]
    }
    
  }

  render() {
    return (
      <div className="App">
        <Products productList = {this.productsState.products} />
      </div>
    );
  }
}

export default App;
