const express = require('express');
const { registerPartial } = require('hbs');
const {getPlanets} = require('../middleware/repository');
const router = express.Router();

//localhost3000/repository
router.get('/', (req,res) => {
    res.render('repository', {title: 'Repository', webTitle: 'Celestial Bodies'});
})

//localhost3000:/repository/planets
router.get('/planets',getPlanets, (req,res) => {
    res.render('data', {title: 'Planets', webTitle:'Planets'})
})

module.exports = router;