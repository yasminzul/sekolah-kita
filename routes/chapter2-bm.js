var express = require('express');
var router = express.Router();
var Scorecard = require ('../models/treasure-hunt');

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
  clue: [false, false, false, false, false, false, false, false, false, false, false, false],
  chapterAccess:2,
  cluesFound:0 });
  res.render('chapter2-bm', { title: 'Bab 2', currScore: scoreCard });
});

router.get('/jumpa/:id', function(req, res, next) {
  var whichClue = req.params.id; //might have to check html id instead
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
  clue: [false, false, false, false, false, false, false, false, false, false, false, false],
  chapterAccess:2,
  cluesFound:0 });

  scoreCard.found(whichClue);
  req.session.scoreCard = scoreCard;
  res.redirect('/bab2/#'+whichClue);
});

module.exports = router;
