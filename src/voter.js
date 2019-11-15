    import React from "react";
    
    class voter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                password: '',
                name:"",
                submit: true
            }
            this.getName = this.getName.bind(this)
            this.getPassword = this.getPassword.bind(this)
            this.getSubmit = this.getSubmit.bind(this)

        }
            getName(event){
                this.setState({
                    name: event.target.value
                })
        
        
            }
        
            getPassword(event){
                this.setState({
                    password: event.target.value
                })
            }

            getSubmit(event){
                event.preventDefault();
              
               this.setState({
                   name:"",
                   password:""
               })
                   console.log(this.state)
            }
        render() {
            return (
                <div  className="all">
                   <h1 className="voter_name">{this.props.name}</h1> 
                   <h1 className="voter_id">{this.props.id}</h1> 

                  <form onSubmit={this.getSubmit}>
                      <label className="label-name">NAME</label>
                      <input className="name" required type="text" placeholder="Enter your name" value={this.state.name} 
                    onChange={this.getName}/>
                      <label  className="label-pass">CARD NO</label>
                      <input className="pass" required type="password" placeholder="Enter your card number"  value={this.state.password} 
                    onChange={this.getPassword}/>
                  <button onSubmit={this.getSubmit}>Submit</button>
                  
                  </form>
                </div>
            );
          
        }
        
    }
    
    export default voter;