const db = require('../database');

module.exports = {
    repositoryChecker: async function(req,res,next){
        if(req.session.user){
            next();
        }else{
            console.log('User is not logged in');
        }
    }
}