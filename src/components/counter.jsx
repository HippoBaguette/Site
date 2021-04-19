import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <span className="badge m-2">{this.props.counter.name}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2">Clear</button>
            </div >
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "0" : count;
    }
}

export default Counter;