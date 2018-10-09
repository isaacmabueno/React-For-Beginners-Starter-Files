import React from 'react';
import { format } from 'url';

class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Please Enter A Store</h2>    
                <input type='text' required placeholder='Store Name'></input>
                <button type='submit'>Visit Store &rarr;</button>
            </React.Fragment>
        )
    }
}

export default StorePicker