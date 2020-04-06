import React, { Component } from 'react';
import './projects.css'

class Projects extends Component {
    state = { 
        projects: []
     }

     componentDidMount() {
        fetch("http://matakansenturk.com:3000/api/projects")
          .then((response) => response.json())
          .then((a) => this.setState({ projects: a }));
      }

    render() { 
        return ( 
            <div className="container">
                {this.state.projects.map((project) => (
                    <div className="row project">
                        <div className="col-3">
                            <img src={project.image} height="300" width="600" className="img-fluid img-thumbnail" alt="roject_image"/>
                        </div>
                        <div className="col-9">
                            <h1 className="project-title">{project.name}</h1>
                            <p>{project.architecture}, {project.frontEnd}, {project.backEnd}, {project.database}</p>
                            <br/><br/>
                            <button className="btn btn-primary">Read More >></button>
                        </div>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Projects;