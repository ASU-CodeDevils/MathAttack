var express = require('express');
var router = express.Router();
var url = require('url');
var math = require('../lib/math');
var body = require('body-parser');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to MathAttack' });
});
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var problem = math.expressionGen();
  res.render('problems', { title: 'Problem',
      firstTerm: problem.firstTerm,
      operator: problem.operation,
      secondTerm: problem.secondTerm,
      answer: problem.answer,
      name: username
  });
  console.log("username " + username);
});
router.post('problems', function(req, res, next) {
  console.log("WORKED")
});

module.exports = router;
