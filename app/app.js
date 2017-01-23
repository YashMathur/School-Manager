import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import AppContainer from './containers/app.container'
import Login from './components/Login'
import Main from './components/Main'

class App extends React.Component {
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer} />
                <Route path="/Main" component={Main} />
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
