import React, {Component} from 'react'
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
        inventory: []
    }
  } 

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
    return (
      <div>
        <Dashboard inventory={this.state.inventory} />
        <Form  />
        <Header/>
      </div>
    )
  }
}