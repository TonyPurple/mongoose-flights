const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET flight list
router.get('/', flightsCtrl.index);
//GET flight form
router.get('/new', flightsCtrl.new);
//POST form to database
router.post('/', flightsCtrl.create);
//GET flight details
router.get('/:id', flightsCtrl.show);
//DELETE flight
router.delete('/:id', flightsCtrl.delete);

module.exports = router;