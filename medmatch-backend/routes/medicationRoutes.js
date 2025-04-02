const express = require('express');
const router = express.Router();
const { getMedication } = require('../controllers/medicationController');
router.get('/:name', getMedication);
module.exports = router;