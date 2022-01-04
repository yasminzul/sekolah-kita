var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter2', { title: 'Chapter 2' });
});

module.exports = router;
