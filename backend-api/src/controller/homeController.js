 const conn = require('../config/database.js')
const getHomepage = (req , res) => {
    //call model 
    return res.render('anhminh.ejs')
}
const getAnhMinh = (req , res ) => {
    res.send('anh minh dep trai nhat qua dat ');
}
const postCreateUser = (req , res) => { 
    res.send('create a new user ')
}
module.exports = { 
    getHomepage,
    getAnhMinh,
    postCreateUser
}