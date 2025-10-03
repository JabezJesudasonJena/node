const router = express.Router()
const express = require('express')



router.get('/', (req, res) => {
    res.sendFile('templates/index.html')
})

module.exports = router



