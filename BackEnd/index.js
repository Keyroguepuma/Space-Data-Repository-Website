const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const session = require('express-session');


//Routers
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const repositoryRouter = require('./routes/respository');

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

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    key: 'keyboard cat',
    secret: 'secret secret',
    resave: false,
    saveUninitialized: true
}));

//localhost:3000/home
app.use('/home', homeRouter);

//localhost:3000/users
app.use('/users', usersRouter);

//localhost:3000/repository
app.use('/repository', repositoryRouter);



app.listen(port,console.log(`Listening in port ${port}`));