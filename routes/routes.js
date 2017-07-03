
//managing routing for each /--

const express = require("express");
const app = express();

//homepage
router.get('/', function(req, res){
  // res.render('users');
  res.send('this is the homepage');
});
//sign-up page
router.get('/signup', function(req, res){
  // res.render('users', );
  res.send('this is the sign-up page');
});
//login page
router.get('/login', function(req, res){
  // res.render('users', );
  res.send('this is the login page');
});
//new gab page
router.get('/newgab', function(req,res){
  // res.render('messages', );
  res.send('this is the new gab page');
});
//list of likes page
router.get('/likeslist', function(req,res){
  // res.render('likes', );
  res.send('this is the list of likes page');
});

module.exports = mainRouter;
