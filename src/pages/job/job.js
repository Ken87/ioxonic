import React, { Component } from 'react';


import screen01 from '../../images/index/icon/screen01.jpg';
import screen02 from '../../images/index/icon/screen02.jpg';
import screen03 from '../../images/index/icon/screen03.jpg';

class Job extends Component {
    render() {
        return (

                <div className="container">
                    <div className="contentspace text-center">
                        <div className="title">
                            <h1>Our Job</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                        </div>
                    </div>
                    <div className="row row-bottom-padded-lg">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-4">
                                <img className="img-responsive img-feature-1" src={screen01} alt="screen01"/>
                            </div>
                            <div className="col-md-7 col-md-push-1">
                                <h2>We create beautiful web and mobile apps.</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-primary">Learn more</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row row-bottom-padded-lg">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-4 col-md-push-8">
                                <img className="img-responsive img-feature-1" src={screen02} alt="screen02"/>
                            </div>
                            <div className="col-md-7 col-md-pull-4">
                                <h2>We create beautiful web and mobile apps.</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-primary">Learn more</a></p>
                            </div>

                        </div>
                    </div>

                    <div className="row row-bottom-padded-lg">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-4">
                                <img className="img-responsive img-feature-1" src={screen03} alt="screen03"/>
                            </div>
                            <div className="col-md-7 col-md-push-1">
                                <h2>We create beautiful web and mobile apps.</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-primary">Learn more</a></p>
                            </div>
                        </div>
                    </div>


                </div>





        );
    }
}

export default Job;
