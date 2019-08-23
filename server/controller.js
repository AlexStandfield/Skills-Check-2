const createProduct = (req, res) => {
    const dbInstance = req.app.get('db')
    const {name, price, img} = req.body

    dbInstance.create_product([name, price, img])
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'ERROR!!!!!'})
        console.log(err)
    })
}

const getProducts = (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then(products => res.status(200).send(products))
    .catch(err => {
        res.status(500).send({errorMessage: 'ERROR!!!!!'})
        console.log(err)
    })
}

const updateProduct = (req, res) => {
    const dbInstance = req.app.get('db')
    const {params, query} = req

    dbInstance.update_product([params.id, query.desc])
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'ERROR!!!!!'})
        console.log(err)
    })
}

const deleteProduct = (req, res) => {
    const dbInstance = req.app.get('db')
    const {id} = req.params

    dbInstance.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'ERROR!!!!!'})
        console.log(err)
    })
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}