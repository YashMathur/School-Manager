import React from 'react';
import {hashHistory} from 'react-router';
class Main extends React.Component{

    constructor(props) {
        super(props);
    }
    handleClick(){
        hashHistory.goBack();
    }

    render(){
        return(
            <div className='topBar'>
                
            </div>
        )
    }

}

export default Main
