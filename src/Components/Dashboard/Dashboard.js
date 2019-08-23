import React, { Component } from 'react'

import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    componentDidMount= () => {
        
        axios.get(`/api/inventory`)
        .then((res) => {
            this.getProducts()
            })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const mappedInventory = this.props.inventory.map((inventory, i) => {
            return(
                <Product key={i} name={inventory.name} price={inventory.price} img={inventory.img} />
            )
        })
        return (
            <div>
                Dashboard
                <Product />
                {mappedInventory}
            </div>
        )
    }
}
