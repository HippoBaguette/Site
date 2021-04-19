import React, { Component } from 'react';

class Buy extends Component {
    render() {
        return (
            <a href="https://github.com/HippoBaguette/Site">
                <button
                    onClick={this.props.onBuy}
                    className="btn btn-primary btn-sm m-2">Continue to checkout</button>
            </a>
        )
    }
}

export default Buy;