const express = require('express')
const router = express.Router()
const ctrlWrapper = require('../middlewares/ctrlWrapper')
const getAllLots = require('../controllers/getAllLots')


router.get('/lots/:make', ctrlWrapper(getAllLots))
module.exports = router