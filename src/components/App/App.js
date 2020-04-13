import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Experiences from '../experiences/experiences'
import Projects from '../projects/projects'
import Navbar from '../navbar/navbar'
import Profile from '../profile/profile'

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <br/><br/>
      <br/><br/>
      <Router>
        <div className="row">
          <div className="col-sm-0 col-lg-2"></div>
          <div className="col-sm-12 col-lg-8">
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/experiences">
              <Experiences />
            </Route>
          </div>
          <div className="col-sm-0 col-lg-2"></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
