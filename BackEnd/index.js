const express = require('express');
const {pool} = require('./database')
const path = require('path');
const handlebars = require('express-handlebars');
const { title } = require('process');

const app = express();
const port = 3000;

app.engine('hbs', handlebars.engine({
    layoutsDir: path.join(__dirname,"views/layout"),
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: '.hbs',
    defaultLayout: 'layout',
})
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));



app.get('/home',(req,res) => {
    res.render('index', {title: 'Home', webTitle: 'Welcome to Space Data Repository'});
});

app.get('/login',(req,res) => {
    res.render('login', {title: 'Sign In', webTitle: 'Space Data Repository'})
});

app.get('/account', (req,res) => {
    res.render('account', {title: 'Sign up'})
});

app.get('/repository', (req,res) => {
    res.render('repository', {title: 'Repository', webTitle: 'Celestial Bodies'})
})


app.listen(port,console.log(`Listening in port ${port}`));