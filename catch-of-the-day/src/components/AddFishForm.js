import React from 'react'

class AddFishForm extends React.Component {
    createFish = () => {
        alert('hello')
    }
    render() {
        return (
            <form onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="price" type="text" placeholder="Price"/>
                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Desc"></textarea>
                <input name="image" type="text" placeholder="Name"/>
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm