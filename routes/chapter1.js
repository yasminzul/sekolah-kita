var express = require('express');
var router = express.Router();
var Scorecard = require ('../models/treasure-hunt');

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter1', { title: 'Chapter 1' });
});

router.get('/found-clue/:id', function(req, res, next) {
  var whichClue = req.params.id; //might have to check html id instead
  var scoreCard = new Scorecard(req.session.scoreCard ? req.session.scoreCard : {
    clue1: false,
    clue2: false,
    clue3: false,
    clue4: false,
    clue5: false,
    clue6: false,
    clue7: false,
    clue8: false,
    clue9: false,
    clue10: false,
    clue11: false,
    clue12: false,
    chapterAccess:1 })

  scoreCard.found(whichClue);
  req.session.scoreCard = scoreCard;
  console.log(req.session.scoreCard);
  res.redirect('/en/chapter1');
});

module.exports = router;
