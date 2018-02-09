var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var mongo_url = require('../models/mongo_url.js');

router.get('/:shortURL', function(req, res, next){
    var query = {shortURL: req.params.shortURL};
    mongo_url.urlLongToShort.find(query, function(err, result){
        if(err){
            console.log(err);
        } else {
            console.log(result[0].longURL);
            res.redirect(result[0].longURL)
        }
    });
});

module.exports = router;