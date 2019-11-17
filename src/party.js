import React from "react";
    
class party extends React.Component {


    state = {fans: []};

    getSubmit = e => {
      e.preventDefault();
      const voters = [
        {name: "habib", id: "123"},
        {name: "segun", id: "456"},
        {name: "yomi", id: "789"},
        {name: "dimola", id: "369"}
      ];
      let newFan = {
        name: document.querySelector(".login-name").value,
        id: document.querySelector(`.(label-pass)`).value
      };
  
                 
    };

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
            <div  className="form">
              

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

export default party;