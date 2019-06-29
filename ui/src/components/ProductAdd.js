import React, { Component } from "react";


class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valName: '',
            valCount: ''
        }
    }

    clearState(){
        this.setState({
            valName: '',
            valCount: ''
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
        const {productAdd} = this.props;
        
        const obj = {
            id:Math.random(),
            name:this.state.valName,
            count:this.state.valCount
        };


        productAdd(obj);

        this.clearState();

        event.preventDefault(); // tüm sayfanın render olmasını engeller
    }

    render() {

        const { valName, valCount } = this.state;

        return (

            <form onSubmit={this.onSubmitFormListener.bind(this)}>
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
                        <button id="inputSave" 
                            className="btn btn-primary" 
                            type="submit" >
                            Add
                        </button>
                    </div>
                    <div className="card-footer">
                        <h6>Add Product Panel Footer</h6>
                    </div>

                </div>
            </form>
        )
    }
}

export default ProductAdd;
