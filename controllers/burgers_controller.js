var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router()
 

router.get('/', function (req, res) {
  burger.all(function(data){
    console.log(data);
    res.render('index.handlebars',{
      burgers:data
    });
  });
})
 

module.exports = router;