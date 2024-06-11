const express = require('express');
const router = express.Router();
const db = require('../database')

//localhost:3000/users/login
router.get('/login', (req,res) => {
    res.render('login', {title: 'Log In', webTitle: 'Space Data Repository'});
})

router.post('/login', async function(req,res,next){

    var {userID, username, password} = req.body;
    

    try {
        const [results, fields] = await db.query('SELECT account_id, accountName, password FROM `Account` WHERE accountName = ? AND password = ?',[username,password]);

        const user = results[0];

        if(!user){
            console.log('There was no account');
            return req.session.save(function(error){
                res.redirect('/login')
            })
            
        }else{
            req.session.user = {
                userID:    user.account_id,
                username:  user.accountName,
                password:  user.password,
            }
            console.log(req.session.user);
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

router.post('/registration', async function(req,res,next){
    var{firstName,lastName,username,email,password,cpassword,role} = req.body;
    var emailConfirmation = 0;

    if(role){
        emailConfirmation = 1;
    }

    try {
        const insertAccountQuery = 'INSERT INTO `Account`(accountName,email,password,firstName,lastName,emailUpdate) Values(?,?,?,?,?,?)';
        const [results,fields] = await db.query(insertAccountQuery,[username,email,password,firstName,lastName,emailConfirmation]);

        if(results && results.affectedRows == 1){
            res.redirect('./login')
        }else{
            res.redirect('./registration');
        }

    } catch (error) {
        next(error);
        
    }

})



module.exports = router;
