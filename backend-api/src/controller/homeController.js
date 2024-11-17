 const conn = require('../config/database.js')
const getHomepage = (req , res) => {
    //call model 
    conn.query(
        'select * from Users u ',
        function (err , results, feilds) { 
            console.log('result >>> ',results);
        }
      );
    res.send('Hello woeld');
}
const getAnhMinh = (req , res ) => {
    res.send('anh minh dep trai nhat qua dat ');
}
module.exports = { 
    getHomepage,
    getAnhMinh
}