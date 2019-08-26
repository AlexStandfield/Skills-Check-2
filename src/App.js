import React, {Component} from 'react'
import axios from 'axios'


import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

import 'reset-css'

export default class App extends Component {

  componentDidMount(){
    console.log('CDM');

    axios.get('/api/inventory')
    .then(() => {
    console.log('its working')
    this.getProducts();
    
  })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    
    return (
      
      <div>
        <Dashboard />
        <Form  />
        <Header/>
      </div>
    )
  }
}