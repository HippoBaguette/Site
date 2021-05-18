import React, { Component } from 'react';
import Content from './components/content';
import Empty from './components/empty';
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

    render() {
        return (
            <div>
                {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} /> */}
            <div style={sectionStyle}>
                
                <main className="container" >
                    
                        <ContentBg />
                        <Content />
                        <Empty />
                        
                    
                </main>

            </div>
            </div>
        )
    }
}
export default App;
