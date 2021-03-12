require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(require('./routes'))


app.listen(process.env.PORT || 8001, () => {
    console.log('server listening to port 8001')
})