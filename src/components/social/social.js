import React, { Component } from 'react';
import "./social.css"

class Social extends Component {
    state = { }
    render() { 
        return ( 
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 social-button inline-block">
                    <a href="matakansenturk.com"><i className="fa fa-google-plus"></i></a>
                    <p>You can email to me.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 social-button inline-block">
                    <a href="https://www.linkedin.com/in/m-atakan-senturk/"><i className="fa fa-linkedin"></i></a>
                    <p>You can connect to me.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 social-button inline-block">
                    <a href="matakansenturk.com"><i className="fa fa-instagram"></i></a>
                    <p>You can follow me.</p>
                </div>
            </div>
         );
    }
}
 
export default Social;