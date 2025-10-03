const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
    //console.log(blogs)
    blogs.forEach(e =>  {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname, "../templates/bloghome.html"))
})

router.get('/blogpost/:slug', (req, res) => {
    //console.log(req.params.slug)
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, "../templates/blogpage.html"))
})

module.exports = router



