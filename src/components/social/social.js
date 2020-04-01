import React, { Component } from 'react';
import "./social.css"

class Social extends Component {
    state = { }
    render() { 
        return ( 
            <ul className="social-buttons">
                <li><a href="/matakansenturk.com"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="/matakansenturk.com"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="/matakansenturk.com"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
         );
    }
}
 
export default Social;