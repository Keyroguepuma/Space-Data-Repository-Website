const express = require('express');
const { registerPartial } = require('hbs');
const {getPlanets} = require('../middleware/repository');
const {repositoryChecker} = require('../middleware/auth');
const router = express.Router();
const db = require('../database');
//localhost3000/repository
router.get('/', (req,res) => {
    res.render('repository', {title: 'Repository', webTitle: 'Celestial Bodies'});
})

//localhost3000:/repository/planets
router.get('/planets',repositoryChecker,getPlanets, (req,res) => {
    res.render('data', {title: 'Planets', webTitle:'Planets'})
})

router.get('/planets/search',async function(req,res,next){
    var {key} = req.query;
    var searchValue = `%${key}%`;
    
    try {
        var searchQuery = "SELECT p.planet_id, p.name, p.type, p.size, p.moons, s.name as 'solarSystem_name' FROM `Planet` p  JOIN `Solar System` s ON s.solarSystem_id = p.solarSystem WHERE p.name LIKE ?";
        var[results,fields] = await db.query(searchQuery,[searchValue]);
        
        if(results && results.length > 0){
            res.locals.count = results.length;
            res.locals.results = results;
            res.locals.searchValue = key;
            return res.render('data',{title:'Planets', webTitle: 'Planets'});
        }else{
            return req.session.save(function(error){
                if (error) next(error);
                return res.redirect('/planets');
            })
        }
        
    } catch (error) {
        next(error);
        
    }
})

module.exports = router;