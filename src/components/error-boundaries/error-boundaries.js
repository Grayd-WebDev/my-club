import React from 'react';
import { Component } from 'react';
import Error from "../error";

export default class ErrorBoundaries extends Component{
    componentDidCatch(){
        return <Error/>;
    }
    
    render(){
        return this.props.children;
    }
}