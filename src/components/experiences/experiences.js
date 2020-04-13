import React, { Component } from 'react';
import './experiences.css'

class Experiences extends Component {
    state = { 
       experiences : [
         ["2008", "Intern Software Engineer", "Olcsan Teknoloji - ITU ARI Teknokent","Python, RabbitMQ, C#, SMTP, Docker, Git, Computer Vision, Image Processing, Machine Learning, Deep Learning", "https://media-exp1.licdn.com/dms/image/C560BAQEQ8ivh-oc81A/company-logo_200_200/0?e=2159024400&v=beta&t=Mt3aNfchIRKvyG0c3gX54FJ1B_EM0rU-kPpca-2t_VI"],
         ["2008", "Intern .NET Developer", "Oguz Packaging - Esenyurt","MS SQL Server, Entity Framework, ASP.NET MVC, JavaScript, Angular, HTML, CSS, Winforms, Git", "https://lh3.googleusercontent.com/proxy/0J9XbjRvfhWJ7vfk69FzIlSlCt8J4DhuwxTuxzQSMWTa6QFQiATQyaOXgiOnpaIR3AjRPissCeg1Xg6WTvwQUvQhvCTAwlbxOcGjzX3dXkqqIal0jcT1xir6q17IA3GapCY"],
         ["2008", "Intern IT Support", "Istanbul Aydin University","Help Desk", "https://i1.rgstatic.net/ii/institution.image/AS%3A267473364946948%401440782027167_l"]
      ]
     }
    render() { 
        return (
          <div className="container">
               <h4 className="text-center">Job Experiences Timeline</h4>
                <br/>
                  {this.state.experiences.map((e, index) => (
                  <div className="row experiences" key={index}>
                     <div className="col-2">
                        <img className="img-thumbnail" src={e[4]} alt="experience"/>
                     </div>
                     <div className="col-10">
                        <span>{e[0]}</span>
                        <h4>{e[1]}</h4>
                        <h5>{e[2]}</h5>
                        <p>{e[3]}</p>
                     </div>
                  </div>
                  ))}
         </div>
        );
    }
}
 
export default Experiences;