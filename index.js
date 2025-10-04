const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const route = require('./routes/users')

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI)
    .then( () => console.log("Succesfully Connnected to the MongoDB Database "))
    .catch(err => console.log('Connection Error : ', err))


// It seems that this is the middle ware
app.use(express.json());
app.use(cors());


app.use('/api/users', route);

app.get('/', (req, res) => {
    res.send("Welcome to the Main Page ! ");
})



app.listen(PORT, () => {
    console.log("The server is running at http://localhost:"+PORT)
})

