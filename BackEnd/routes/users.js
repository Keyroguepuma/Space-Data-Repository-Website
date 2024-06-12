const express = require('express');
const router = express.Router();
const db = require('../database')
const {checkEmail} = require('../middleware/validator');
const {profileChecker} = require('../middleware/auth');
const bycrypt = require('bcryptjs');


//localhost:3000/users/login
router.get('/login', (req,res) => {
    res.render('login', {title: 'Log In', webTitle: 'Space Data Repository'});
})

router.post('/login', async function(req,res,next){

    var {userID, username, password} = req.body;

    

    try {
        const [results, fields] = await db.query('SELECT account_id, accountName, password FROM `Account` WHERE accountName = ?',[username]);

        const user = results[0];
        console.log(password);
        console.log(user.password);

        if(bycrypt.compareSync(password,user.password) == false){
            console.log('There was no account');
            return req.session.save(function(error){
                res.redirect('/login')
            })
            
        }else{
            console.log('password match');
            req.session.user = {
                userID:    user.account_id,
                username:  user.accountName,
                password:  user.password,
            }
            
            
            req.session.save(function(err){
                res.redirect('/home');
            })
           
        }
        
    } catch (error) {
        next(error);
    }
})


//localhost:3000/users/registration
router.get('/registration', (req,res) => {
    res.render('account',{title: 'Sign In', webTitle: 'Space Data Repository'})
})

router.post('/registration',checkEmail, async function(req,res,next){
    var{firstName,lastName,username,email,password,cpassword,role} = req.body;
    var emailConfirmation = 0;


    if(role){
        emailConfirmation = 1;
    }

    var hashPassword = bycrypt.hashSync(password,8);



    try {
        const insertAccountQuery = 'INSERT INTO `Account`(accountName,email,password,firstName,lastName,emailUpdate) Values(?,?,?,?,?,?)';
        const [results,fields] = await db.query(insertAccountQuery,[username,email,hashPassword,firstName,lastName,emailConfirmation]);

        if(results && results.affectedRows == 1){
            res.redirect('./login')
        }else{
            res.redirect('./registration');
        }

    } catch (error) {
        next(error);
        
    }

})

//localhost:3000/users/profile
router.get('/profile',profileChecker,(req,res) =>{
    res.render('profile',{title: 'Profile', webTitle:'Space Data Repository'})
})

//localhost:3000/users/logout
router.post('/logout',(req,res) =>{
    req.session.destroy(function(error) {
        res.redirect('/home')
    })
})


module.exports = router;
