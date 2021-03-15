require('dotenv').config()
const express = require('express')
const { join } = require("path")

const app = express()
const publicPath = join(__dirname, 'public')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// server up files in public
app.use(express.static(publicPath))

// route to homepage
app.get("/", (req, res) => {
  res.sendfile(path.join(publicPath, "index.html"))
})

app.use(require('./routes'))


app.listen(process.env.PORT || 8001)