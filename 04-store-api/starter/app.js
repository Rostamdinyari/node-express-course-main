console.log('04 Store API')
require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
port = process.env.PORT || 3000
const productsRouter = require('./routes/products')
require('express-async-errors')


//middleware
app.use(express.json())


//routes
app.get('/',(req,res)=>{
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products',productsRouter)
//products route

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')







app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port)
    console.log(`Server is running on ${port}`)
  } catch (error) {
    console.log(error)
  }
}

start()