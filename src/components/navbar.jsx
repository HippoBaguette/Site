import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://github.com/HippoBaguette">Hippo, WTF?!!!</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://github.com/HippoBaguette">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/HippoBaguette">Features</a>
                    </li>
                 </ul>
                </div>
                 </div>
            </nav>

        )
    }
}
export default Navbar;