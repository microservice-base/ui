import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id,name,count } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{count}</td>
            </tr>
        )
    }

}

export default Product;