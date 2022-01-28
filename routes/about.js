var express = require('express');
var router = express.Router();
var Scorecard = require ('../models/treasure-hunt');

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
  clue: [false, false, false, false, false, false, false, false, false, false, false, false],
  chapterAccess:1,
  cluesFound:0 });
  res.render('credits-en', { title: 'About', currScore: scoreCard });
});

module.exports = router;
