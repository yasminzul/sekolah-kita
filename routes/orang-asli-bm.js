var express = require('express');
var router = express.Router();

/* GET orang asli page. */
router.get('/', function(req, res, next) {
  res.render('orang-asli-bm', { title: 'Siapakah Orang Asli?' });
});

module.exports = router;
