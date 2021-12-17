var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('orang-asli-en', { title: 'Who Are The Orang Asli' });
});

module.exports = router;
