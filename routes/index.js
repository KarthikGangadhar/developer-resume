const express = require('express');
const router = express.Router();
const profile = require("../config/profile")
const settings = require("../config/settings")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { profile: profile, settings: settings });
});

module.exports = router;
