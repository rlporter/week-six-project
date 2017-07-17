
//managing routing for each /--

const express = require("express");
const app = express();

//homepage
router.get('/', function(req, res){
  res.render('homepage');
});

//sign-up page
router.get('/signup', function(req, res){
  res.render('signup');
});
router.post('/signup', function(req, res){
  res.send(req.body);
});

//login page
router.get('/login', function(req, res){
  res.render('login');
});
router.post('/login', function(req, res){
  res.send(req.body);

//new gab page
router.get('/newgab', function(req,res){
  res.render('newgab');
});
router.post('/newgab', function(req,res){
  res.send(req.body);
});

//list of likes page
router.get('/likeslist', function(req,res){
  res.render('likes');
});

module.exports = router;
