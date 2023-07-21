const express = require('express');
const router = express.Router();
const productRoute = require('./product')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Template App' });
});

router.use('/api/v1/products', productRoute)

module.exports = router;
