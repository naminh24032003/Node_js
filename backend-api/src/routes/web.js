const express = require('express')
const router = express.Router();
const {getHomepage ,getAnhMinh} = require('../controller/homeController')
router.get('/', getHomepage);

router.get('/anhminh', getAnhMinh);

module.exports = router;