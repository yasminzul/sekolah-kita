var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter3', { title: 'Chapter 3' });
});

module.exports = router;
