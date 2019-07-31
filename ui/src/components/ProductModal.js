import React, { Component } from 'react';
import ProductAdd from "./ProductAdd";

class ProductModal extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const { productAdd } = this.props;

        return (

<div>
            
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Product Add Modal
            </button>
            
        
            <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Product Add Modal Title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  
                  
                  <ProductAdd productAdd={productAdd}/>
                  
                  
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            </div>
        )
    }

}

export default ProductModal;