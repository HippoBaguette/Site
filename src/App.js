import React, { Component } from 'react';
import NavBar from './components/navbar';
import Buy from './components/buy';
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0, name: "Apple" },
            { id: 2, value: 2, name: "Banana" },
            { id: 3, value: 0, name: "Pear" },
            { id: 4, value: 0, name: "Plum" }
        ]
    }


    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    }
    handleDelete = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value = 0;
        this.setState({ counters })
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    }
    handleBuy = () => {
        console.log('e')
    }
    render() {
        return (
            <div>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete} />
                    <Buy onBuy={this.handleBuy} />
                </main>

            </div>
        )
    }
}
export default App;