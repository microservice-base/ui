import React, { Component } from "react";


class ProductAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h6>Add Product Panel Header</h6>
                </div>
                <div className="card-body">
                    <label>Name</label>
                    <input id="inputName" className="form-control" type="text" />
                    <label>Count</label>
                    <input id="inputCount" className="form-control" type="number" />
                    <hr />
                    <button id="inputSave" className="btn btn-primary" type="button" >Add</button>
                </div>
                <div className="card-footer">
                    <h6>Add Product Panel Footer</h6>
                </div>

            </div>
        )
    }
}

export default ProductAdd;
