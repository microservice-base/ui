import React, { Component } from 'react';
import Product from "./components/Product";
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product />
        <Products />
      </div>
    );
  }
}

export default App;
