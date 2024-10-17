const express = require('express')
const { errorHandlers } = require('./middleware')

const app = express()

app.use(express.json())

//endpoints

app.use(errorHandlers.errorHandler)

module.exports = app
