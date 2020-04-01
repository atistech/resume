import React from 'react';
import './App.css';
import Timeline from '../timeline/timeline'
import Social from '../social/social'
import Navbar from '../navbar/navbar'

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <br/><br/>
      <br/><br/>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <Social />
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col-sm-0 col-lg-2"></div>
        <div className="col-sm-12 col-lg-8">
          <Timeline />
        </div>
        <div className="col-sm-0 col-lg-2"></div>
      </div>
    </div>
  );
}

export default App;
