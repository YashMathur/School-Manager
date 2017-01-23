import React from 'react';
import {hashHistory} from 'react-router';
class Login extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick(){
        hashHistory.push('/Main');
    }

    render(){
        return(
            <div className='loginDiv'>
                <h1>Login</h1>
                <div>Username: <input type='text' /></div>
                <div>Password: <input type='password' /></div>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }

}

export default Login
