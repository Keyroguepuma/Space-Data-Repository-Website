const express = require('express');
const { registerPartial } = require('hbs');
const router = express.Router();

//localhost3000/repository
router.get('/', (req,res) => {
    res.render('repository', {title: 'Repository', webTitle: 'Celestial Bodies'});
})


module.exports = router;