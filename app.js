const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log('Server Started on localhost:' + port);
});