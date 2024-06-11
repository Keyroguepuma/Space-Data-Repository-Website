const express = require('express');
const db = require('../database');
const validator = require('validator');

module.exports = {
    checkEmail: async function(req,res,next){
        try {
            var {email} = req.body;

            if(validator.isEmail(email)){
                console.log('email is good');
                next();
            }else{
                console.log('email is not good');
                req.session.save(function(error){
                    if (error) next(error);
                })
            }
            
        } catch (error) {
            next(error);
        }
    }
}