import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    createProducts = (event) => {
        const {name, price, img} = this.state
        const body = {
            name,
            price,
            img
        }
        axios.post('/api/inventory', body).then(res => {
            this.setState({
                inventory: res.data,
                name: '',
                price: 0,
                img: ''
            })
        })
    }

    clear = (req, res) => {
        this.setState({
          name: '',
          price: '',
          img: ''
        })
      }

    render() {
        return (
            <div>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />

                <label>Price</label>
                <input type='text' value={this.state.price} onChange={(event) => this.setState({price: event.target.value})}/>

                <label>Image URL</label>
                <input type='text' value={this.state.img} onChange={(event) => this.setState({img: event.target.value})}/>

                <button onClick={this.clear}>Cancel</button>
                <button onClick={this.createProducts}>Add to Inventory</button>
            </div>
        )
    }
}
