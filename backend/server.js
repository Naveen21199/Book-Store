require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./db')
const PORT = process.env.PORT || 8080


connectToDb()
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))
app.use(express.json())

app.use('/api/v1/book', require('./routes/bookRoutes'))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})