const conn = require('../config/database.js')
const getHomepage = (req, res) => {
    //call model 
    return res.render('anhminh.ejs')
}
const getAnhMinh = (req, res) => {
    res.send('anh minh dep trai nhat qua dat ');
}
const postCreateUser = (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let age = req.body.age;
    let address = req.body.address;
   
}
module.exports = {
    getHomepage,
    getAnhMinh,
    postCreateUser
}