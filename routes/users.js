const express = require('express');
const router = express.Router();

let users = [
    {id : 1, name : "Jabez"},
    {id : 2, name : "Jena"}
];

router.get('/', (req, res) => {
    res.json(users);
})

router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1 ;
    users.push(newUser);
    res.status(201).json(newUser);
})

router.get('/:id', (req, res) => {
    let userId = parseInt(req.params.id);
    let user = users.find(u => userId == u.id);

    if(user) {
        res.json(user);
    } else {
        res.status(404).send("No User has been found ")
    }
})


module.exports = router