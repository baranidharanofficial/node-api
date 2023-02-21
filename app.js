const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

//MIDDLEWARE
app.use(cors());
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("We are on home")
})

app.get('/posts', (req, res) => {
    res.send("We are on posts")
})

//CONNECT TO DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("CONNECTED TO DB");
});


app.listen(3000);

