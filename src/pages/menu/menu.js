import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';

import logo from '../../images/index/ioxonic_logo.png';

class Menu extends Component {
    state = { y: 0 }
    navigationRef = undefined
    handleScroll = (y) => {
        window.requestAnimationFrame(() => {
            const { scrollY } = window
            this.setState({ y: scrollY });
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        return (
            <header id="fh5co-header"
                    className="banner "
                    ref={this.navigationRef}
                    style={{
                        zIndex: 999,
                        backgroundColor: "#43BFCB",
                        padding: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                        left: 0,
                        right: 0,
                        top: 0,
                        position: this.state.y > 0 ? "fixed" : "relative"
                    }}>
                <div className="container">
                    <div className="header-inner header-logo">
                            <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
                        <nav className="navigation">
                            <ul>
                                <li><NavLink to="/">HOME</NavLink></li>
                                <li><NavLink to="/service" >SERVICE</NavLink></li>
                                <li><NavLink to="/job">JOB</NavLink></li>
                                <li><NavLink to="/contactus">CONTACT US</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Menu;
