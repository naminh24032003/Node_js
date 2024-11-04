const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
    res.send('anh minh dep trai ');
})
router.get('/anhminh', function (req, res) {
    res.render('anhminh');
})
module.exports = router;