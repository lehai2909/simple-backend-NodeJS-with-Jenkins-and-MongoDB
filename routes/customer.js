var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customer_controller')
/* GET users listing. */
router.get('/create', customer_controller.customer_create_get);

router.post('/create', customer_controller.customer_create_post);

module.exports = router;
