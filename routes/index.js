var express = require('express');
var router = express.Router();
var url = require('url');
var mathGen = require('../lib/math');
/* GET home page. */
router.get('/', function(req, res, next) {
  var username = url.parse(req.url, true);

  res.render('index', { title: 'MathAttack' });
});
router.post('/', function(req, res, next) {
  res.redirect('login', { title: 'Login Successful' });
});
router.post('/login', function(req, res, next) {
  var problem = mathGen.expressionGen();
  res.render('problems', { title: 'Solve the problem below:',
      firstTerm: problem.firstTerm, secondTerm: problem.secondTerm, operator: problem.operation, answer: problem.answer
  });
});

module.exports = router;
