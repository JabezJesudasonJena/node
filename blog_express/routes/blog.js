const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
    blogs.forEach(e =>  {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

module.exports = router



