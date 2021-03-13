require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(require('./routes'))

app.get("/*", (request, response) => {
  response.sendFile(join(__dirname, "public", "index.html"))
})

app.listen(process.env.PORT || 8001)