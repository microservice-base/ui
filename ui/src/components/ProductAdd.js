import React, { Component } from "react";


class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valName: '',
            valCount: 0
        }
    }

    clearState() {
        this.setState({
            valName: '',
            valCount: 0
        })
    }

    onNameChange(event) {
        this.setState({
            valName: document.getElementById("inputName").value
        })
    }

    onCountChange(event) {
        this.setState({
            valCount: document.getElementById("inputCount").value
        })
    }

    onSubmitFormListener(event) {
        const { productAdd } = this.props;

        const obj = {
            id: Math.random(),
            name: this.state.valName,
            count: this.state.valCount
        };


        productAdd(obj);

        this.clearState();

        event.preventDefault();   //tüm sayfanın render olmasını engeller
    }

    render() {

        const { valName, valCount } = this.state;

        return (

            <div>
                <button id="modalButton"
                    type="button" className="btn btn-primary"
                    data-toggle="modal" data-target="#exampleModal">
                    Add Product Button
            </button>

                <div class="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">

                        <form onSubmit={this.onSubmitFormListener.bind(this)}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Product Add Modal</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">


                                    <div className="card">
                                        <div className="card-header">
                                            <h6>Add Product Panel Header</h6>
                                        </div>
                                        <div className="card-body">
                                            <label>Name</label>
                                            <input id="inputName"
                                                className="form-control"
                                                type="text"
                                                value={valName}
                                                onChange={this.onNameChange.bind(this)} />

                                            <label>Count</label>
                                            <input id="inputCount"
                                                className="form-control"
                                                type="number"
                                                value={valCount}
                                                onChange={this.onCountChange.bind(this)} />
                                            <hr />
                                        </div>
                                        <div className="card-footer">
                                            <h6>Add Product Panel Footer</h6>
                                        </div>

                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button id="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button id="saveModal" className="btn btn-primary" type="submit" >Add</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductAdd;
