import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Timeline from '../timeline/timeline'
import Social from '../social/social'
import Projects from '../projects/projects'
import Navbar from '../navbar/navbar'

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
           <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/social">
              <Social />
            </Route>
            <Route exact path="/timeline">
              <Timeline />
            </Route>
          </div>
          <div className="col-sm-0 col-lg-2"></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
