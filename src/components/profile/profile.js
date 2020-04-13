import React, { Component } from 'react';
import Social from '../social/social'

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container text-center">
                <h1>Title is not found.</h1>
                <br/><br/>
                <div className="row">
                    <div className="col">
                        <img src="https://miro.medium.com/fit/c/256/256/2*CIFP5nNfgPDEvUYRchy9UQ.jpeg" height="200" width="200" alt="profile"/>
                    </div>
                    <div className="col">
                        <p>I'm Atakan. I will graduate from engineering college. </p>
                    </div>
                    <div className="col"></div>
                </div>
                <br/><br/>
                <Social />
            </div>
            
         );
    }
}
 
export default Profile;