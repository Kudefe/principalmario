const express = require('express');
const router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dev Say: Game Developer Stories' });
});



module.exports = router;


