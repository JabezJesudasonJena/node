const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const h = (req, res, next) => {
  console.log(req)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static(path.join(__dirname, "public")))
//app.use(h)

app.get('/about/:name', (req, res) => {
    res.send("This is Jabez from the server ! " + req.params.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 