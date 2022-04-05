import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {Route, Router} from "react-router";

//引入页面
import Menu from './pages/menu/menu';
import Home from './pages/home/home';
import Service from './pages/service/service';
import Job from './pages/job/job';
import Contactus from './pages/contactus/contactus';
import Footer from './pages/footer/footer';

import './css/css/index.css';
import './css/css/bootstrap.css';

const history = createHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div id="fh5co-page">
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/service" component={Service}/>
                    <Route path="/job" component={Job}/>
                    <Route path="/contactus" component={Contactus}/>
                    <Footer/>
                </div>
            </Router>


        );
    }
}

export default App;
