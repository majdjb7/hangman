import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
    render() {
        let blanksArray = []
        // for(let i=0; i<4; i++) {
        //     blanksArray.push(<span>_ </span>)
        // }
        for(let i=0; i<this.props.solution.word.length; i++) {
            blanksArray.push(<Letter letter={this.props.solution.word[i]}> </Letter>)
        }
        return(
            <div>
                {blanksArray}
                
                <div className="hint">{this.props.solution.hint}</div>
            </div>
        )
    }
}

export default Solution