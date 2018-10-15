import React from 'react';
import { format } from 'url';

class StorePicker extends React.Component {

    goToStore() {
        console.log('hey');
    }
    render() {
        return (
            <React.Fragment>
            <form className='store-selector' onSelect={this.goToStore}>
                <h2>Please Enter A Store</h2>   
                <input 
                    type='text' 
                    required 
                    placeholder='Store Name' 
                    defaultValue={getFunName()}
                />
                <button type='submit'>Visit Store &rarr;</button>
            </form>
            </React.Fragment>
        )
    }
}

export default StorePicker