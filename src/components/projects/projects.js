import React, { Component } from 'react';
import './projects.css'
import API from '../api_calls/API'

class Projects extends Component {
    state = { 
        projects: []
    }

    async componentDidMount() {
        new API().getProjects().then(result=> {
            this.setState({ projects: result });
        });
    }

    setClasses(a){
        return "col-12 col-sm-3 col-md-3 col-lg-3 project "+a.toString();
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    {this.state.projects.map((project) => (
                        <div className={this.setClasses(project.container_color)} key={project.name}>
                            <h1 className="project-title">{project.name}</h1>
                            <p>{project.architecture}, {project.frontEnd}, {project.backEnd}, {project.database}</p>
                            <br/><br/>
                            <button className="btn btn-primary">Read More >></button>
                        </div> 
                    ))}
                </div>
            </div>
         );
    }
}
 
export default Projects;