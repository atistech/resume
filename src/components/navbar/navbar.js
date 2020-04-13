import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/">matakansenturk.com</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Profile</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/experiences">Job Experiences</a>
                  </li>
                </ul>
              </div>
            </nav>
         );
    }
}
 
export default Navbar;