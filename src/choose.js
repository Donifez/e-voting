import React from   "react";

class choose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {party, Candidate, Position}=this.props;
        return (
            <div className="choose-container">
             <h1>{party}   </h1>
             <ul>
             <li>{Candidate}</li>
             <li>{Position}</li>
             <button> Click to Vote </button>
             </ul>
            
            </div>
        );
    }
}

export default choose;