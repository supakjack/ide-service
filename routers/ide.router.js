const express = require('express')
const router = express.Router()
const ideController = require('../controllers/ide.controller')

router.get('/hello', ideController.hello)

module.exports = router
