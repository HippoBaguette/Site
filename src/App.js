import React, { Component } from 'react';
import NavBar from './components/navbar';
import Buy from './components/buy';
import Counters from "./components/counters";
import Background from './components/componentassests/5rsow6fjhqw11.jpg';
import Content from './components/content';

let sectionStyle = {
    backgroundImage: `url(https://github.com/HippoBaguette/Site/blob/master/src/components/componentassests/5rsow6fjhqw11.jpg?raw=true)`,
    height: "100vh",
    width: "auto",
    opacity: "0.6",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

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
            <div style={sectionStyle}>
                
                <main className="container" >
                    {
                        <Content />
                    }
                </main>

            </div>
            </div>
        )
    }
}
export default App;
