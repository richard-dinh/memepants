require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, '../../', 'public')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(publicPath))
// render landing page
app.get("", (req, res) => {
  res.sendfile(path.join(publicPath, "index.html"))
})

app.use(require('./routes'))


app.listen(process.env.PORT || 8001, () => {
    console.log('server started')
})