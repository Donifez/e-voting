    import React from "react";
    import Party  from "./party";
    class voter extends React.Component {
   
        render() {
            return (
                <div  className="all">
                   <h1 className="voter_name">{this.props.name}</h1> 
                   <h1 className="voter_id">{this.props.id}</h1> 
                <Party/>
              
                </div>
            );
          
        }
        
    }
    
    export default voter;