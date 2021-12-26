import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
    render() {
        let solutionArray = []

        for(let i=0; i<this.props.solution.length; i++) {
            solutionArray.push(<Letter letter={this.props.solution[i]} status="false"/>)
        }
        return(
            <div>
                {solutionArray}
                
                <div className="hint">{this.props.solution.hint}</div>
            </div>
        )
    }
}

export default Solution