const express = require('express');
const router = express.Router();
const db = require('../database')

//localhost:3000/users/login
router.get('/login', (req,res) => {
    res.render('login', {title: 'Log In', webTitle: 'Space Data Repository'});
})

router.post('/login', async function(req,res,next){

    var {username, password} = req.body;

    try {
        const [results, fields] = await db.query('SELECT accountName, password FROM `Account` WHERE accountName = ? AND password = ?',[username,password]);

        const user = results[0];

        console.log(user);

        if(!user){
            res.send('There was no Account');
        }else{
            res.send('There was an Account');
        }
        
    } catch (error) {
        next(error);
    }
})


//localhost:3000/users/registration
router.get('/registration', (req,res) => {
    res.render('account',{title: 'Sign In', webTitle: 'Space Data Repository'})
})

module.exports = router;