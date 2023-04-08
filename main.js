const express = require('express')
const app = express()
const products = require('./data.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json()) // parse json body content

app.get('/', function(req, res) {
  var outstring = 'Starting... ';
  res.send(outstring);
})

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})
