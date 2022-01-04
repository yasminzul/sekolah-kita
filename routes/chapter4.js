var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter4', { title: 'Chapter 4' });
});

module.exports = router;
