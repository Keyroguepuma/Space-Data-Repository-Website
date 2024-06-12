const db = require('../database');

module.exports = {
    repositoryChecker: async function(req,res,next){
        if(req.session.user){
            next();
        }else{
            console.log('User is not logged in');
        }
    },

    profileChecker: async function(req,res,next){
        if(req.session.user){
            next();
        }else{
            res.redirect('/login');
            console.log('User not logged in');
        }
    }
}