import React, {Component} from 'react';

import icon01 from '../../images/index/icon/icon01.png';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="home">
                    <section id="" className="header_banner">
                        <div className="mybackground">
                            <div className="container header_banner2_container">
                                <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">
                                            <h1>E-Coin Trading System</h1>
                                            <p>E-Coin trading system is a decentralized key/value registration and transfer system based on cryptocurrency (e.g. Dogecoin, Litecoin, Bitcoin). </p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 middlecontent bg-blue">
                                <h2>Build a landing page for your business <br/>or project and generate more leads!</h2>
                            </div>
                        </div>
                    </section>

                    <div className="container contentspace">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="subtitle">Why Choose Us?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 services-inner text-center text-padding">
                               <img src={icon01} alt="icon"/>
                                <p>Advance Technologies & profesional expertise</p>
                            </div>

                            <div className="col-md-3 services-inner text-center text-padding">
                                <img src={icon01} alt="icon"/>
                                <p>Bespoke business application development and end to end project delivery</p>
                            </div>

                            <div className="col-md-3 services-inner text-center text-padding">
                                <img src={icon01} alt="icon"/>
                                <p>Cost-effective and yet powerful, flexible and scalable architecture solution designs</p>
                            </div>

                            <div className="col-md-3 services-inner text-center text-padding">
                                <img src={icon01} alt="icon"/>
                                <p>Custom and unique solutions designed to suit the needs of key industries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
