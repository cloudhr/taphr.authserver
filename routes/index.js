var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({
    status:200,
    message:'accepting token requests'
  });
});

module.exports = router;
