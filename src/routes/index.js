var express = require('express');
var router = express.Router();
let { index,
    menuDetail } = require('../controllers/indexController.js')

/* GET home page. */
router.get('/', index);
/* GET detail page. */
router.get('/detalle/:id', menuDetail);

module.exports = router;
