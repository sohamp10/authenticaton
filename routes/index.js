var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* product */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Product' });
});
/* about page*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });
});
/* service */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

/* contact us */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});



module.exports = router;
