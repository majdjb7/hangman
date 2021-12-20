import React, { Component } from "react";

class Solution extends Component {
    render() {
        let blanksArray = []
        for(let i=0; i<4; i++) {
            blanksArray.push(<span>_ </span>)
        }
        return(
            <div>
                {blanksArray}
                <div>HINT</div>
            </div>
        )
    }
}

export default Solution