import React, { Component } from  'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    
    //if error set the state to true by this block
    componentDidCatch (error, info) {
        this.setState({hasError: true})

    }
    render () {
        if (this.state.hasError){
            return <h1>Something went wrong...</h1>  
        }
        return this.props.children;
    }
}

export default ErrorBoundry;