var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET flight list
router.get('/', flightsCtrl.index);
//GET flight form
router.get('/new', flightsCtrl.new);
//POST form to database
router.post('/', flightsCtrl.create);

module.exports = router;