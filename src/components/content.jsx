import React, { Component } from 'react';

let style = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: window.innerHeight,
  fontSize: "xx-large",
  color: "white",
  textShadow: "2px 2px black"
}
class Content extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <span className="text-center" style={style}>Center aligned text on all viewport sizes.</span>
                
            </div>
            );
    }
}
 
export default Content;