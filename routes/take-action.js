var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('take-action', { title: 'Take Action' });
});

module.exports = router;
