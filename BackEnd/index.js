const express = require('express');
const {blackHoleQuery} = require('./database')
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

console.log(blackHoleQuery);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res) => {
    res.render('index' , {title: 'Home'}, console.log("It worded"));
})



app.listen(3000,console.log(`Listening in port ${port}`));