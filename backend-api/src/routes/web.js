const express = require('express')
const router = express.Router();
const {getHomepage ,getAnhMinh, postCreateUser} = require('../controller/homeController')
router.get('/', getHomepage);

router.get('/anhminh', getAnhMinh);
router.post('/create-user', postCreateUser)
module.exports = router;