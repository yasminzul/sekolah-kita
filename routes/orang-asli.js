var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.get('orang-asli');
});

module.exports = router;
