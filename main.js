const express = require('express')
const app = express()
const products = require('./data.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
