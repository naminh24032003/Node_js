const express = require('express')
require('dotenv').config();
const path = require('path');
const configViewEngine = require('./config/viewEngine.js')
const app = express()
const port =process.env.PORT ;
const hostname = process.env.HOSTNAME
const webRoutes = require('./routes/web.js')
const mysql = require('mysql2')
/* **************************************************************** */
//test connecttion 
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password:'123456',
    database: 'anhminh',
  });
  //query 
  conn.query(
    'select * from Users u ',
    function (err , results, feilds) { 
        console.log('result >>> ',results);
        console.log('feilds >>> ' , feilds);
    }
  )
/* config engine  */
configViewEngine(app);
/* Routes   */
app.use('/' ,webRoutes)





app.listen(8080)