var express = require('express');
var router = express.Router();
var profile = require("../config/profile")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { profile: profile });
});

module.exports = router;
