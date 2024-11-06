const getHomepage = (req , res) => {
    res.send('Hello woeld');
}
const getAnhMinh = (req , res ) => {
    res.send('anh minh dep trai nhat qua dat ');
}
module.exports = { 
    getHomepage,
    getAnhMinh
}