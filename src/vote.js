import React, {Component} from "react";
import "./vote.css";
import Choose from "./choose";

class vote extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div  className="vote-body">
             <Choose party="APC" Candidate="Peter Obi" Position="Presidential Candidate" />
            
             <Choose party="PDP" Candidate="Ahmed Tinubu" Position="Presidential Candidate"/>
             <Choose party="APGA" Candidate="Ezenwaka Ifeanyi" Position="Presidential Candidate"/>
             </div>
            </React.Fragment>
        );
    }
}

export default vote;