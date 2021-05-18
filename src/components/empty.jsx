import React, { Component } from 'react';


let style = {
    height: '200px',
    paddingTop: '100px'
}
class Empty extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <span style={style}></span>
            </div>
            );
    }
}
 
export default Empty;