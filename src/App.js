import React, { Component } from 'react';
import NavBar from './components/navbar';
import Buy from './components/buy';
import Counters from "./components/counters";
import Content from './components/content';
import ContentBg from './components/componentassests/contentbg'
import Background from './components/componentassests/5rsow6fjhqw11.jpg'

let sectionStyle = {
    backgroundImage: `url(${Background})`,
    // background: "#2d3436",
    height: window.innerHeight,
    width: "100%",
    opacity: "1",
    overlflow: "hidden",
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class App extends Component {
    constructor () {
        super()
    }

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
                {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} /> */}
            <div style={sectionStyle}>
                
                <main className="container" >
                    
                        <ContentBg />
                        <Content />
                        
                    
                </main>

            </div>
            </div>
        )
    }
}
export default App;
