    import React, {Component} from "react";
    import Voter from "./voter";
    class voters extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                 voterList :[
                    
                        {name: "habib", id: "123"},
                        {name: "segun", id: "456"},
                        {name: "yomi", id: "789"},
                        {name: "dimola", id: "369"}   
                    
                ]
             };
        }
        render() {
            const {voterList} = this.state;
            return (
              <div>
             {voterList.map(voter=>
              <Voter/> 
             )}
           
              </div>
              );
        }
    }
    
    export default voters;