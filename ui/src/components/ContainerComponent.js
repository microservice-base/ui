import React, { Component } from 'react';

class ContainerComponent extends Component {

    constructor(){
        super();
        document.write("constructor neden en alta - render edildikten sonra çalışıyor !!! <br/>");
    }

    componentWillMount(){
        // virtual dom işlemleri bittikten sonra  component real-dom a bağlanmadan hemen önce çalışır.
        document.write("componentWillMount <br/>");
    }
    componentWillUnmount(){
        document.write("componentWillUnmount <br/>");
    }
    componentWillUpdate(){
        document.write("componentWillUpdate <br/>");
    }
    componentDidMount(){
         // virtual dom işlemleri bittikten sonra  component real-dom a bağlanmadan hemen önce çalışır.
         document.write("componentDidMount <br/>");
    }
    componentDidUpdate(){
        document.write("componentDidUpdate <br/>");
    }
    componentDidCatch(){
        document.write("componentDidCatch <br/>");
    }
    

    


    //////// shouldComponentUpdate  default true dur  
    //bir component update edildikten sonra tekrar render edilip dilmeyeceğini belirliyoruz. d 
    
    //////// componentWillReceiveProps

    render(){
        return(
            <h1>container component example</h1>

            // react lifecycle
            // mounting
            // onmouning
            // update
        );
    }
}
export default ContainerComponent;
