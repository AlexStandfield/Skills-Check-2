import React, { Component } from 'react'

import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            inventory: []
        }
    }

    render() {
        const mappedInventory = this.state.inventory.map((inventory, i) => {
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
