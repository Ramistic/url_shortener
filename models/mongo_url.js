var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://138.68.186.51/URLConverter');

var Schema = mongoose.Schema;

var urlSchema = new Schema ({
    longURL: String,
    shortURL: String
});

var urlModel = mongoose.model("urlLongToShort", urlSchema);

module.exports = {
    urlLongToShort: urlModel
};
