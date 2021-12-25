import React, { Component } from 'react';


let style = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: window.innerHeight,
  fontSize: "100px",
  color: "#ecf0f1",
  textShadow: "2px 2px #bdc3c7"
}
let pad = {
    paddingTop: window.innerHeight / 4
}
class Content extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <span className="text-center" style={style}>Hippo</span>
                <h1 style={pad}>ABOUT:</h1>
                <p>I'm Pat from Western Australia. I exist. No cap.</p>
            </div>
            );
    }
}
 
export default Content;
