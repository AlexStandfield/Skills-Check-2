require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const massive = require('massive')

const app = express()

const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log(dbInstance)
    console.log('DB Connected')
})

app.use(express.json())
app.use(cors())

app.post('/api/product', ctrl.createProduct)
app.get('/api/inventory', ctrl.getProducts)
app.put('/api/inventory/:id', ctrl.updateProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)

app.listen(4000, () => {
    console.log('Server is Running')
})