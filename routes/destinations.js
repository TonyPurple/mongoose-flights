const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id', destinationsCtrl.create);
router.delete('/flights/:id/destinations/:destinationid', destinationsCtrl.delete)

module.exports = router;