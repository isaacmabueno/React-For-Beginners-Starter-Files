import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        //1. take a copy of the existing state (you never want to reach directly into an object)
        const fishes = {...this.state.fishes}
        //2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. set the new fishes object into state
        this.setState({fishes})
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }

    addToOrder = (key) => {
        // 1. take a copy of state
        const order = {...this.state.order}

        // 2. either add to the order or update our order #
        order[key] = order[key]+1 || 1;

        // 3. call setState to update our state object
        this.setState({ order });
    }
render() {
    return (
        <React.Fragment>
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish 
                            key={key} 
                            index={key}
                            details={this.state.fishes[key]} 
                            addToOrder={this.addToOrder} />
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory loadSampleFishes = {this.loadSampleFishes} addFish={this.addFish} />
            </div>
        </React.Fragment>
    )
}
}

export default App;