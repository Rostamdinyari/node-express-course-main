console.log('04 Store API')
require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
port = 3000
app.listen(port)
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')











console.log(`Server is running on ${port}`)