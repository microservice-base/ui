import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { productList, productDelete } = this.props;


        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(row => {
                            return <Product
                                key={row.id}
                                rowInfo={row}
                                productDelete={productDelete} />

                            // return <Product
                            //     key={row.id} // kayıtlara unique değer gerekli
                            //     id={row.id}
                            //     name={row.name}
                            //     count={row.count} />;

                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Products;