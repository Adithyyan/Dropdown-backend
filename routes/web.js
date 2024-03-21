const express = require('express');
const itemController =require('../controllers/listController')

const router = express.Router();

router.get('/items', itemController.getAllDoc)

module.exports = router