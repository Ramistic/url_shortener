var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var mongo_url = require('../models/mongo_url.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/', function(req, res, next){
    mongo_url.urlLongToShort.create({
        longURL: req.body.longURL,
        shortURL: req.body.shortURL
    }, function(err, data){
        if(!err) {
            res.status(200);
            res.json({
                status: 'All good'
            })
        }}
    )
});

module.exports = router;
