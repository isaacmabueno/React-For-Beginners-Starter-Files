import React from 'react'
import Header from './Header'

class App extends React.Component {
render() {
    return (
        <React.Fragment>
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header />
                    {/*<inventory />*/}
                    {/*<order />*/}
                </div>
            </div>
        </React.Fragment>
    )
}
}

export default App;