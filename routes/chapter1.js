var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('chapter1', { title: 'Bab 1' });
});

module.exports = router;
