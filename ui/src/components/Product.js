import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
    }


    onDeleteClick(id, e) {
        console.log("clicked");
        // console.log(this);
        console.log(id);

        const { productDelete } = this.props;
        
        productDelete(id) // bir üstteki metoda gönderdi
    }


    render() {
        // const { id,name,count } = this.props;
        const { rowInfo } = this.props;

        return (
            <tr>
                <td>{rowInfo.id}</td>
                <td>{rowInfo.name}</td>
                <td>{rowInfo.count}</td>
                <td>
                    <button id="deleteBtn" className="btn btn-danger" type="button" 
                    onClick={this.onDeleteClick.bind(this, rowInfo.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }

}

export default Product;