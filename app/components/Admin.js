import React from 'react';
import {hashHistory} from 'react-router';

class Admin extends React.Component{

    constructor(props) {
        super(props);
    }
    handleClick(){
        hashHistory.goBack();
    }

    render(){
        return(

        )
    }

}

export default Admin
