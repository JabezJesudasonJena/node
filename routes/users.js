const express = require('express');
const router = express.Router();
const User = require('../models/User')


router.get('/', async (req, res) => {
    //console.log(User.find())
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        name : req.body.name
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message : err.message});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user == null ) {
            return res.status(500).json({message : "Cannot find the User"})
        }
        res.json(user);
    } catch {
        res.status(500).json({message : err.message})
    }
})


module.exports = router