import React, { Component } from 'react';
import './timeline.css';

class Timeline extends Component {
    state = { 
       experiences : [
         ["2008", "Intern Developer", "We gather your business and products information.We gather your business and products information."],
         ["2008", "Intern Developer", "We gather your business and products information.We gather your business and products information."]
      ]
     }
    render() { 
        return (
          <section className="experience pt-100 pb-100" id="experience">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 mx-auto text-center">
                    <div className="section-title">
                      <h4>Experience Timeline</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                         <div className="col-xl-12">
                            <ul className="timeline-list">
                              {this.state.experiences.map((person, index) => (
                               <li key={index}>
                                  <div className="timeline_content">
                                     <span>{person[0]}</span>
                                     <h4>{person[1]}</h4>
                                     <p>{person[2]}</p>
                                  </div>
                               </li>
                               ))}
                            </ul>
                         </div>
                      </div>
              </div>
              </section>
        );
    }
}
 
export default Timeline;