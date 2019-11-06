import React from "react";
import "./App.css";


class login extends React.Component {
  
    render() {
        return (
           <div className="login-container">
        
              <h1 className="header">Party Voting System</h1>
              <h3>This is a voting system made using react, for voting for a preferred candidate in  a party</h3>
              <div>
                  <form>
                      <label id="label">Enter your assigned email</label>
                      <h4>Input your assigned email to login and vote for your preferred candidate</h4>
                      <input className="email" type="email" placeholder="Enter Email" name="email" required/>
    
                   <input className="submit" type="submit" value="submit"/>
                 
                  </form>
              </div>
           </div> 
        );
    }
}

export default login;