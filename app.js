require('dotenv').config();

// import express from 'express';
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

// templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//     res.send("Hello World");
// });

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})