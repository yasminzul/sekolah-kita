var express = require('express');
var router = express.Router();
var Scorecard = require ('../models/treasure-hunt');

/* GET chapter 1 page. */
router.get('/', function(req, res) {
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
  clue: [false, false, false, false, false, false, false, false, false, false, false, false],
  chapterAccess:1,
  cluesFound:0 });
  res.render('chapter1', { title: 'Chapter 1', currScore: scoreCard });
});

router.get('/found-clue/:id', function(req, res, next) {
  var whichClue = req.params.id; //might have to check html id instead
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
  clue: [false, false, false, false, false, false, false, false, false, false, false, false],
  chapterAccess:1,
  cluesFound:0 });

  scoreCard.found(whichClue);
  req.session.scoreCard = scoreCard;
  res.redirect('/en/chapter1/#'+whichClue);
});

module.exports = router;
