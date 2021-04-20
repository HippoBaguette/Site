import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="https://github.com/HippoBaguette">

                        Shop Name
                        
                        <div className="btn btn-warning m-2">
                            <span >Your Cart:</span>
                            <span className="badge badge-pill badge-success m-1">{this.props.totalCounters}</span>
                        </div>
                        
                    </a>
            </nav>

        )
    }
}
export default Navbar;