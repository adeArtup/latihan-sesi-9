import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from '../../../component/header';

class Explorer extends React.Component {
    render(){
        return(
            <React.Fragment>           
                 <Header />    
                 <h1>Explore</h1>
            </React.Fragment>

        );
    }
}

export default Explorer;