import React, {Component} from 'react';

class contactus extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="text-center">
                        <div className="title">
                            <h1>Contact Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-7">
                            <div class="map">
                                <iframe src="https://maps.google.com/maps?q=mid valley centerpoint&t=&z=17&ie=UTF8&iwloc=&output=embed">
                                </iframe>
                            </div>
                        </div>

                        <div class="contact-info">
                            <div class="col-md-5">
                                <h3>IOXONIC</h3>
                                <p>Level 27 Penthouse, Centrepoint North, Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur</p>
                                <ul>
                                    <li> +38 000 129900</li>
                                    <li> info@domain.net</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="email" class="form-control" id="exampleInputName" placeholder="name"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="email"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputPhone" placeholder="phone"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <textarea className="form-control" rows="5"></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contactus;
