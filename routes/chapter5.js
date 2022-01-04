var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter5', { title: 'Chapter 5' });
});

module.exports = router;
