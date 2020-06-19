const express = require('express')
const router = express.Router()

router.get('/', function(req,res) {
  res.render('home')
})

router.get('/news', function(req,res) {
  res.render('news')
})

router.get('/about', function(req,res) {
  res.render('about')
})

router.get('/contact', function(req,res) {
  res.render('contact')
})

router.post('/', function(req, res) {
  let useroptions = {}
  useroptions = {
    email: req.query.email,
    password: req.query.password
  }
  console.log(req.query.email)
  console.log(useroptions["password"])
})

router.get('/profile', function(req, res) {
  res.render('profile')
})
module.exports = router