const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/', require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
 