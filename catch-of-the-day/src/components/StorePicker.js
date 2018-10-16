import React from 'react';
import { getFunName } from '../helpers.js'


class StorePicker extends React.Component {

myInput = React.createRef();

goToStore = (event) => {
    //stop the form from submitting
    event.preventDefault();

    //get text from that input
    const storeName = this.myInput.value.value;
    
    //change the page to /store/whatever-they-entered
    //here we will use pushDate using react router

    this.props.history.push(`/store/${storeName}`)
}
    render() {
        return (
            <React.Fragment>
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>   
                <input 
                type='text' 
                ref={this.myInput}
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