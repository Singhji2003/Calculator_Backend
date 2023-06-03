const connectToMongo = require('./db')
const express = require('express')
const port = 5000
const app = express()
var cors = require('cors')
app.use(cors())
connectToMongo();
app.use(express.json())
app.use('/calculation', require('./routes/calculation'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})